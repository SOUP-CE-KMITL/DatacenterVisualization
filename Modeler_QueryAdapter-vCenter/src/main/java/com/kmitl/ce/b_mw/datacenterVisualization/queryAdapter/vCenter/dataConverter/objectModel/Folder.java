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
public class Folder extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(Folder.class.getName());

  /**
   *
   * @param folderJSONString
   * @throws JSONException
   */
  public Folder(String folderJSONString) throws JSONException {
    this.jsonData = new JSONObject(folderJSONString);
    String key = jsonData.getJSONObject("MOR").getString("val");
    if (!key.split("-")[0].equals("group")) {
      throw new JSONException("Couldn't parse input JSON string");
    }
  }

  /**
   *
   * @return
   */
  @Override
  public String getType() {
    return "Folder";
  }

  /**
   *
   * @return
   */
  public List<String> getChild() {
    try {
      List<String> result = new ArrayList<>();
      JSONArray children = jsonData.getJSONArray("childEntity");
      for (int i = 0; i < children.length(); i++) {
        String name = children.getJSONObject(i).getString("name");
        String type = children.getJSONObject(i).getString("class");
        String key;
        if (!type.equals(com.vmware.vim25.mo.ComputeResource.class.getName())) {
          key = children.getJSONObject(i).getJSONObject("MOR").getString("val");
          result.add(key);
        } else {
          JSONArray hosts = children.getJSONObject(i).getJSONArray("hosts");
          for (int j = 0; j < hosts.length(); j++) {
            result.add(hosts.getJSONObject(j).getJSONObject("MOR").getString("val"));
          }
        }
      }
      return result;
    } catch (JSONException ex) {
      LOG.warn(ex);
      return new ArrayList<>();
    }
  }

  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();
    String name = getName();
    AggregationDistribution ag = new AggregationDistribution();
    ag.setKey(getKey());
    ag.setName(getName());
    ag.setSubType(getType());
    ag.setAggregate(getChild());

    result.add(ag);

    return result;
  }

}
