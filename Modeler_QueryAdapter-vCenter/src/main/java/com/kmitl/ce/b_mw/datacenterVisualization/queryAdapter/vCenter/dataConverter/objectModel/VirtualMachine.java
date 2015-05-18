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
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.ComputeUnit;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class VirtualMachine extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(VirtualMachine.class.getName());

  /**
   *
   * @param virtualMachineJSONString
   * @throws JSONException
   */
  public VirtualMachine(String virtualMachineJSONString) throws JSONException {
    this.jsonData = new JSONObject(virtualMachineJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("vm")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  /**
   *
   * @return
   */
  @Override
  public String getType() {
    return "VirtualMachine";
  }

  public String getParent() {
    try {
      return jsonData.getJSONObject("parent").getJSONObject("MOR").getString("val");
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

  /**
   *
   * @return
   */
  public List<Device> getDevices() {
    List<Device> devices = new ArrayList<>();

    Device device = new Device();
    device.setKey(getKey() + ".memory");
    device.setName("memory");
    device.setSubType("memory");

    String baseResource = jsonData.getJSONObject("runtime").getJSONObject("host").getString("val") + ".memory.resource";
    List<String> baseResources = new ArrayList<>();
    baseResources.add(baseResource);
    device.setBaseResources(baseResources);

    try {
      String resourcePool = jsonData.getJSONObject("resourcePool").getJSONObject("MOR").getString("val");
      baseResources.add(resourcePool);
    } catch (Exception e) {
      LOG.info(e.getMessage());
    }

    devices.add(device);

    device = new Device();
    device.setKey(getKey() + ".cpu");
    device.setName("CPU");
    device.setSubType("cpu");

    baseResource = jsonData.getJSONObject("runtime").getJSONObject("host").getString("val") + ".cpu.0.resource";
    baseResources = new ArrayList<>();
    baseResources.add(baseResource);
    device.setBaseResources(baseResources);

    try {
      String resourcePool = jsonData.getJSONObject("resourcePool").getJSONObject("MOR").getString("val");
      baseResources.add(resourcePool);
    } catch (Exception e) {
      LOG.info(e.getMessage());
    }

    devices.add(device);

    return devices;
  }

  /**
   *
   * @return
   */
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

    return result;
  }
}
