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
public class Network extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(Network.class.getName());

  /**
   *
   * @param networkResourceJSONString
   * @throws JSONException
   */
  public Network(String networkResourceJSONString) throws JSONException {
    this.jsonData = new JSONObject(networkResourceJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("network")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  @Override
  public String getType() {
    return "Network";
  }

  /**
   *
   * @return
   */
  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();
    com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.Network network = new com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.Network();
    network.setKey(getKey());
    network.setName(getName());
    network.setSubType("network");
    List<String> keySet = new ArrayList<>();
    JSONArray hosts = jsonData.getJSONArray("hosts");
    for (int i = 0; i < hosts.length(); i++) {
      String key = hosts.getJSONObject(i).getJSONObject("MOR").getString("val");
      keySet.add(key);
    }
    JSONArray vms = jsonData.getJSONArray("vms");
    for (int i = 0; i < vms.length(); i++) {
      String key = vms.getJSONObject(i).getJSONObject("MOR").getString("val");
      keySet.add(key);
    }
    network.setConnect(keySet);
    result.add(network);
    return result;
  }

}
