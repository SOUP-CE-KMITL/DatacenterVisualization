/*
 * Copyright 2014 B_MW (Noppakorn & Nontaya).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.dataConverter.objectModel;

import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.BasicNode;
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.Device;
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.Resource;
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.ComputeUnit;
import com.vmware.vim25.mo.ComputeResource;
import java.util.*;
import org.apache.log4j.Logger;
import org.json.*;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class HostSystem extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(HostSystem.class.getName());

  public HostSystem(String hostSystemJSONString) throws JSONException {
    this.jsonData = new JSONObject(hostSystemJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("host")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  /**
   *
   * @return
   */
  @Override
  public String getType() {
    return "HostSystem";
  }

  public String getParent() {
    try {
      String parent;
      if (jsonData.getJSONObject("parent").getString("class").equals(ComputeResource.class.getName())) {
        parent = jsonData.getJSONObject("parent").getJSONObject("parent").getJSONObject("parent").getJSONObject("MOR").getString("val");
      } else {
        parent = jsonData.getJSONObject("parent").getJSONObject("MOR").getString("val");
      }
      return parent;
    } catch (JSONException ex) {
      LOG.warn(ex);
      return "";
    }
  }

  public String getState() {
    try {
      return jsonData.getJSONObject("summary").getJSONObject("runtime").getString("powerState");
    } catch (JSONException ex) {
      LOG.warn(ex);
      return "";
    }
  }

  public String getOverallStatus() {
    try {
      return jsonData.getString("overallStatus");
    } catch (JSONException ex) {
      LOG.warn(ex);
      return "";
    }
  }

  public List<Device> getDevices() {
    List<Device> devices = new ArrayList<>();

    devices.addAll(getCPU());

    devices.addAll(getMem());

    devices.addAll(getPNIC());

    devices.addAll(getVNIC());

    devices.addAll(getStorage());

    return devices;
  }

  public List<Device> getPortGroup() {
    List<Device> devices = new ArrayList<>();

    JSONArray networks = jsonData.getJSONArray("networks");
    Map<String, String> networkMap = new HashMap<>();
    for (int j = 0; j < networks.length(); j++) {
      JSONObject network = networks.getJSONObject(j);
      networkMap.put(network.getString("name"), network.getJSONObject("MOR").getString("val"));
    }

    //portGroup
    JSONArray portGroups = jsonData.getJSONObject("config").getJSONObject("network").getJSONArray("portgroup");
    for (int i = 0; i < portGroups.length(); i++) {
      JSONObject portGroup = portGroups.getJSONObject(i);

      Device device = new Device();
      device.setKey(portGroup.getString("key"));
      device.setName(portGroup.getJSONObject("spec").getString("name"));
      device.setSubType("portGroup");
      List<String> connects = new ArrayList<>();
      JSONArray ports;
      try {
        ports = portGroup.getJSONArray("port");
      } catch (JSONException ex) {
        ports = new JSONArray();
      }
      for (int j = 0; j < ports.length(); j++) {
        connects.add(ports.getJSONObject(j).getString("key"));
      }
      device.setConnect(connects);
      devices.add(device);

      String networkName = portGroup.getJSONObject("spec").getString("name");
      String networkKey = networkMap.get(networkName);
      if (networkKey != null) {
        for (int j = 0; j < ports.length(); j++) {
          JSONObject port = ports.getJSONObject(j);
          device = new Device();
          device.setKey(port.getString("key"));
          device.setName("");
          device.setSubType(port.getString("type") + "port");
          connects = new ArrayList<>();
          connects.add(networkKey);
          connects.add(portGroup.getString("key"));
          device.setConnect(connects);
          devices.add(device);
        }
      }
    }

    return devices;
  }

  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();

    BasicNode parentNode = new BasicNode();
    parentNode.setKey(getParent());

    ComputeUnit computeUnit = new ComputeUnit();
    computeUnit.setKey(getKey());
    computeUnit.setName(getName());
    computeUnit.setSubType(getType());
    computeUnit.setParent(getParent());
    computeUnit.setState(getState());
    Map<String, Object> attributes = new HashMap<>();
    attributes.put("overallStatus", getOverallStatus());
    computeUnit.setAttributes(attributes);

    List<String> deviceKeys = new ArrayList<>();
    for (Device device : getDevices()) {
      deviceKeys.add(device.getKey());
    }
    computeUnit.setDevices(deviceKeys);

    result.add(parentNode);
    result.add(computeUnit);
    result.addAll(getDevices());
    //result.addAll(getPortGroup());
    //result.addAll(getVSwitch());

    return result;
  }

  private List<Device> getPNIC() {
    List<Device> devices = new ArrayList<>();

    //PNIC
    JSONArray nics = jsonData.getJSONObject("config").getJSONObject("network").getJSONArray("pnic");
    for (int j = 0; j < nics.length(); j++) {
      JSONObject nic = nics.getJSONObject(j);

      //Device
      Device device = new Device();
      device.setKey(nic.getString("key"));
      device.setName(nic.getString("device"));
      device.setSubType("physical NIC");

      String ip = nic.getJSONObject("spec").getJSONObject("ip").getString("ipAddress");
      Map<String, Object> attribute = new HashMap<>();
      attribute.put("ip", ip);
      device.setAttributes(attribute);

      //Resource
      Resource resource = new Resource();
      resource.setKey(nic.getString("key") + ".resource");
      resource.setSubType("Bandwidth");
      resource.setValue(nic.getJSONObject("linkSpeed").getInt("speedMb"));
      resource.setUnit("Mb");

      List<Resource> ownedResources = new ArrayList<>();
      ownedResources.add(resource);
      device.setOwnedResources(ownedResources);

      List<String> owners = new ArrayList<>();
      owners.add(getKey());
      device.setOwners(owners);

      owners = new ArrayList<>();
      owners.add(device.getKey());
      resource.setOwners(owners);

      devices.add(device);
    }

    return devices;
  }

  private List<Device> getVNIC() {
    List<Device> devices = new ArrayList<>();

    //PNIC
    JSONArray nics = jsonData.getJSONObject("config").getJSONObject("network").getJSONArray("vnic");
    for (int j = 0; j < nics.length(); j++) {
      JSONObject nic = nics.getJSONObject(j);

      //Device
      Device device = new Device();
      device.setKey(nic.getString("key"));
      device.setName(nic.getString("device"));
      device.setSubType("virtual NIC");

      String ip = nic.getJSONObject("spec").getJSONObject("ip").getString("ipAddress");
      Map<String, Object> attribute = new HashMap<>();
      attribute.put("ip", ip);
      device.setAttributes(attribute);

      List<String> connects = new ArrayList<>();
      connects.add(nic.getString("port"));
      device.setConnect(connects);

      //Resource
      Resource resource = new Resource();
      resource.setKey(nic.getString("key") + ".resource");
      resource.setSubType("Bandwidth");
      resource.setValue(nic.getJSONObject("spec").getInt("mtu"));
      resource.setUnit("Mb");

      List<Resource> ownedResources = new ArrayList<>();
      ownedResources.add(resource);
      device.setOwnedResources(ownedResources);

      List<String> owners = new ArrayList<>();
      owners.add(getKey());
      device.setOwners(owners);

      owners = new ArrayList<>();
      owners.add(device.getKey());
      resource.setOwners(owners);

      devices.add(device);
    }

    return devices;
  }

  private List<Device> getMem() {
    List<Device> devices = new ArrayList<>();

    //mem
    Device device = new Device();
    device.setKey(getKey() + ".memory");
    device.setName("memory");
    device.setSubType("memory");

    //Resource
    Resource resource = new Resource();
    resource.setKey(getKey() + ".memory" + ".resource");
    resource.setSubType("memory capacity");
    resource.setValue(jsonData.getJSONObject("hardware").getLong("memorySize"));
    resource.setUnit("Mb");

    List<Resource> ownedResources = new ArrayList<>();
    ownedResources.add(resource);
    device.setOwnedResources(ownedResources);

    List<String> resourcePools = new ArrayList<>();
    resourcePools.add(jsonData.getJSONObject("parent").getJSONObject("resourcePool").getJSONObject("MOR").getString("val"));
    device.setResourcePools(resourcePools);

    List<String> owners = new ArrayList<>();
    owners.add(getKey());
    device.setOwners(owners);

    owners = new ArrayList<>();
    owners.add(device.getKey());
    resource.setOwners(owners);

    devices.add(device);

    return devices;
  }

  private List<Device> getCPU() {
    List<Device> devices = new ArrayList<>();

    //cpu
    JSONArray cpus = jsonData.getJSONObject("hardware").getJSONArray("cpuPkg");
    for (int j = 0; j < cpus.length(); j++) {
      JSONObject cpu = cpus.getJSONObject(j);

      //Device
      Device device = new Device();
      device.setKey(getKey() + ".cpu." + cpu.get("index").toString());
      device.setName(cpu.getString("description"));
      device.setSubType("cpu");

      //Resource
      Resource resource = new Resource();
      resource.setKey(getKey() + ".cpu." + cpu.get("index").toString() + ".resource");
      resource.setSubType("CPU frequenzy");
      resource.setValue(cpu.getLong("hz"));
      resource.setUnit("hz");

      List<String> resourcePools = new ArrayList<>();
      resourcePools.add(jsonData.getJSONObject("parent").getJSONObject("resourcePool").getJSONObject("MOR").getString("val"));
      device.setResourcePools(resourcePools);

      List<Resource> ownedResources = new ArrayList<>();
      ownedResources.add(resource);
      device.setOwnedResources(ownedResources);

      List<String> owners = new ArrayList<>();
      owners.add(getKey());
      device.setOwners(owners);

      owners = new ArrayList<>();
      owners.add(device.getKey());
      resource.setOwners(owners);

      devices.add(device);
    }

    return devices;
  }

  private List<Device> getStorage() {
    List<Device> devices = new ArrayList<>();

    //Storage
    JSONArray storages = jsonData.getJSONObject("config").getJSONObject("storageDevice").getJSONArray("scsiLun");
    JSONArray storageResources = jsonData.getJSONObject("config").getJSONObject("fileSystemVolume").getJSONArray("mountInfo");
    for (int i = 0; i < storages.length(); i++) {
      JSONObject storage = storages.getJSONObject(i);
      //Device
      Device device = new Device();
      if (storage.getString("deviceType").equals("disk")) {
        device.setKey(storage.getString("canonicalName"));
      } else {
        device.setKey(getKey() + "." + storage.getString("canonicalName"));
      }
      device.setName(storage.getString("displayName"));
      device.setSubType(storage.getString("deviceType"));
      devices.add(device);

      List<String> owners = new ArrayList<>();
      owners.add(getKey());
      device.setOwners(owners);

      if (storage.getString("deviceType").equals("disk")) {
        for (int j = 0; j < storageResources.length(); j++) {
          JSONObject storageResource = storageResources.getJSONObject(j);
          if (!storageResource.getJSONObject("volume").getString("name").equals("")) {
            //Resource
            //[TODO : Problem may cause from not fully analys json array (Extent)]
            try {
              JSONObject jsonResource = storageResource.getJSONObject("volume").getJSONArray("extent").getJSONObject(0);
              Resource resource = new Resource();
              //uuid
              resource.setKey(storageResource.getJSONObject("volume").getString("uuid"));
              resource.setSubType("storage capacity");
              resource.setValue(storageResource.getJSONObject("volume").getLong("capacity"));
              resource.setUnit("mb");
              //resource.setPath(jsonResource.getJSONObject("mountInfo").getString("path"));

              List<Resource> ownedResources = new ArrayList<>();
              ownedResources.add(resource);
              device.setOwnedResources(ownedResources);

              owners = new ArrayList<>();
              owners.add(device.getKey());
              resource.setOwners(owners);
            } catch (JSONException e) {
              // error
            }
          }
        }
      }
    }

    return devices;
  }

  private List<Device> getVSwitch() {
    List<Device> devices = new ArrayList<>();

    //VSwitch
    JSONArray vSwitches = jsonData.getJSONObject("config").getJSONObject("network").getJSONArray("vswitch");
    for (int i = 0; i < vSwitches.length(); i++) {
      JSONObject vSwitch = vSwitches.getJSONObject(i);
      //Device
      Device device = new Device();
      device.setKey(vSwitch.getString("key"));
      device.setName(vSwitch.getString("name"));
      device.setSubType("vSwitch");
      List<String> connects = new ArrayList<>();
      JSONArray pnics = vSwitch.getJSONArray("pnic");
      for (int j = 0; j < pnics.length(); j++) {
        connects.add(pnics.getString(i));
      }
      JSONArray portGroups = vSwitch.getJSONArray("portgroup");
      for (int j = 0; j < portGroups.length(); j++) {
        connects.add(portGroups.getString(i));
      }
      device.setConnect(connects);

      //[TODO : If there arte more than one base resource it should be simplify with aggregation]
      //Resource
      List<String> baseResources = new ArrayList<>();
      for (int j = 0; j < pnics.length(); j++) {
        baseResources.add(pnics.getString(i) + ".resource");
      }
      device.setBaseResources(baseResources);

      devices.add(device);
    }

    return devices;
  }
}
