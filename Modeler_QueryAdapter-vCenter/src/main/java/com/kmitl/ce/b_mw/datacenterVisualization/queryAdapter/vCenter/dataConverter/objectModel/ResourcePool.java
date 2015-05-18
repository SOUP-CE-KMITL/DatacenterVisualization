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
public class ResourcePool extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(ResourcePool.class.getName());

  /**
   *
   * @param resourcePoolJSONString
   * @throws JSONException
   */
  public ResourcePool(String resourcePoolJSONString) throws JSONException {
    this.jsonData = new JSONObject(resourcePoolJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("resgroup")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  @Override
  public String getType() {
    return "resource pool";
  }

  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();

    AggregationDistribution ag = new AggregationDistribution();
    ag.setKey(getKey());
    ag.setName(getName());
    ag.setSubType(getType());

    JSONArray childResourcePools = jsonData.getJSONArray("resourcePools");
    if (childResourcePools.length() != 0) {
      List<String> distributedNode = new ArrayList<>();
      for (int i = 0; i < childResourcePools.length(); i++) {
        JSONObject childResourcePool = childResourcePools.getJSONObject(i);
        distributedNode.add(childResourcePool.getJSONObject("MOR").getString("val"));
      }
      ag.setDistribute(distributedNode);
    }

    result.add(ag);

    return result;
  }

}
