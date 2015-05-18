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
public class VirtualApp extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(VirtualApp.class.getName());

  public VirtualApp(String virtualAppJSONString) throws JSONException {
    this.jsonData = new JSONObject(virtualAppJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("resgroup")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  /**
   *
   * @return
   */
  @Override
  public String getType() {
    return "Virtual application";
  }

  /**
   *
   * @return
   */
  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();

    AggregationDistribution ag = new AggregationDistribution();
    ag.setKey(getKey());
    ag.setName(getName());
    ag.setSubType(getType());

    List<String> aggregations = new ArrayList<>();
    JSONArray vms = jsonData.getJSONArray("VMs");
    for (int i = 0; i < vms.length(); i++) {
      JSONObject vm = vms.getJSONObject(i);
      aggregations.add(vm.getJSONObject("MOR").getString("val"));
    }
    ag.setAggregate(aggregations);
    result.add(ag);

    return result;
  }

}
