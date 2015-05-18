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

import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.AggregationDistribution;
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.BasicNode;
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.Device;
import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class Datastore extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(HostSystem.class.getName());

  /**
   *
   * @param datastoreJSONString
   * @throws JSONException
   */
  public Datastore(String datastoreJSONString) throws JSONException {
    this.jsonData = new JSONObject(datastoreJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("datastore")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  /**
   *
   * @return
   */
  public String getOverallStatus() {
    try {
      return jsonData.getString("overallStatus");
    } catch (JSONException ex) {
      LOG.warn(ex);
      return "Unknown";
    }
  }

  @Override
  public String getType() {
    return "Datastore";
  }

  public String getBasedResource() {
    try {
      String[] ans = jsonData.getJSONObject("info").getString("url").split("/");
      return ans[ans.length - 1];
    } catch (JSONException ex) {
      LOG.warn(ex);
      return "";
    }
  }

  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();

    AggregationDistribution ag = new AggregationDistribution();
    ag.setKey(getKey());
    ag.setName(getName());
    ag.setSubType(getType());
    List<String> pool = new ArrayList<>();
    pool.add(getBasedResource());
    ag.setAggregate(pool);
    result.add(ag);

    // [TODO] : Rethink this
    Device dev = new Device();
    dev.setKey(getKey() + ".device");
    dev.setName(getName());
    dev.setSubType(getType());

    List<String> keySet = new ArrayList<>();
    JSONArray hosts = jsonData.getJSONArray("host");
    for (int i = 0; i < hosts.length(); i++) {
      String key = hosts.getJSONObject(i).getJSONObject("key").getString("val");
      keySet.add(key);
    }
    JSONArray vms = jsonData.getJSONArray("vms");
    for (int i = 0; i < vms.length(); i++) {
      String key = vms.getJSONObject(i).getJSONObject("MOR").getString("val");
      keySet.add(key);
    }

    dev.setOwners(keySet);
    pool = new ArrayList<>();
    pool.add(getKey());
    dev.setResourcePools(pool);
    result.add(dev);
    result.add(ag);

    return result;
  }

}
