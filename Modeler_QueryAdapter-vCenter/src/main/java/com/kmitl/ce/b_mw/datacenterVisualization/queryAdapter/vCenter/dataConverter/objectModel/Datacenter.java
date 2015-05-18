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
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.ComputeUnit;
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
public class Datacenter extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(HostSystem.class.getName());

  /**
   *
   * @param datacenterJSONString
   * @throws JSONException
   */
  public Datacenter(String datacenterJSONString) throws JSONException {
    this.jsonData = new JSONObject(datacenterJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("datacenter")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  /**
   *
   * @return
   */
  @Override
  public String getType() {
    return "Datacenter";
  }

  /**
   *
   * @return
   */
  public String getParent() {
    try {
      return jsonData.getJSONObject("parent").getJSONObject("MOR").getString("val");
    } catch (JSONException ex) {
      LOG.warn(ex);
      return "";
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

  /**
   *
   * @return
   */
  public List<String> getChild() {
    List<String> children = new ArrayList<>();

    try {
      JSONArray jsonChildren = jsonData.getJSONObject("hostFolder").getJSONArray("childEntity");
      for (int i = 0; i < jsonChildren.length(); i++) {
        JSONObject jsonChild = jsonChildren.getJSONObject(i);
        JSONArray childKeys = jsonChild.getJSONArray("hosts");
        for (int j = 0; j < childKeys.length(); j++) {
          String key = childKeys.getJSONObject(j).getJSONObject("MOR").getString("val");
          children.add(key);
        }
      }
    } catch (JSONException ex) {
      LOG.warn(ex);
    }

    return children;
  }

  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();

    AggregationDistribution ag = new AggregationDistribution();
    ag.setKey(getKey());
    ag.setName(getName());
    ag.setSubType(getType());
    List<String> distributions = new ArrayList<>();
    distributions.add(getParent());
    ag.setDistribute(distributions);
    List<String> aggregations = new ArrayList<>();
    aggregations.addAll(getChild());
    ag.setAggregate(aggregations);
    result.add(ag);

    return result;
  }

}
