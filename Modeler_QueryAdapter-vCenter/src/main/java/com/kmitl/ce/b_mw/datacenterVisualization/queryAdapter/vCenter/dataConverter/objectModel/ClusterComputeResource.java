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
public class ClusterComputeResource extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(ClusterComputeResource.class.getName());

  public ClusterComputeResource(String clusterComputeResourceJSONString) throws JSONException {
    this.jsonData = new JSONObject(clusterComputeResourceJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("domain")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  @Override
  public String getType() {
    return "HostCluster";
  }

  public String getParent() {
    try {
      return jsonData.getJSONObject("parent").getJSONObject("parent").getJSONObject("MOR").getString("val");
    } catch (JSONException ex) {
      LOG.warn(ex);
      return jsonData.getJSONObject("parent").getJSONObject("MOR").getString("val");
    }
  }

  public List<String> getHosts() {
    List<String> hosts = new ArrayList<>();
    try {
      JSONArray jsonHosts = jsonData.getJSONArray("hosts");
      for (int i = 0; i < jsonHosts.length(); i++) {
        JSONObject jsonHost = jsonHosts.getJSONObject(i);
        hosts.add(jsonHost.getJSONObject("MOR").getString("val"));
      }
    } catch (JSONException ex) {
      LOG.warn(ex);
    }
    return hosts;
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
  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();

    AggregationDistribution adNode = new AggregationDistribution();
    adNode.setKey(getKey());
    adNode.setName(getName());
    adNode.setSubType(getType());
    adNode.setAggregate(getHosts());
    List<String> distributions = new ArrayList<>();
    distributions.add(getParent());
    adNode.setDistribute(distributions);

    result.add(adNode);

    return result;
  }

}
