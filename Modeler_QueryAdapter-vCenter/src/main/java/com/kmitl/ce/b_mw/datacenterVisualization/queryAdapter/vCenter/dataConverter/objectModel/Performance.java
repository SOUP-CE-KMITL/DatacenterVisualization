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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class Performance extends BasicModel implements Convertable {

  private static final Logger LOG = Logger.getLogger(Performance.class.getName());

  /**
   *
   * @param performanceJSONString
   * @throws JSONException
   */
  public Performance(String performanceJSONString) throws JSONException {
    this.jsonData = new JSONObject(performanceJSONString);
  }

  @Override
  public String getKey() {
    return jsonData.getJSONObject("entity").getString("val");
  }

  /**
   *
   * @return
   */
  @Override
  public String getType() {
    return "Performance";
  }

  /**
   *
   * @return
   */
  @Override
  public List<BasicNode> toBasicNodes() {
    List<BasicNode> result = new ArrayList<>();

    BasicNode node = new BasicNode();
    node.setKey(getKey());
    Map<String, Object> metadata = new HashMap<>();
    Map<String, Object> collection = new HashMap<>();
    Map<String, Object> header = new HashMap<>();
    header.put("label", jsonData.getString("sampleInfoCSV"));
    // [TODO] validTo, validFrom
    Map<Integer, String> data = new HashMap<>();
    JSONArray performanceArray = jsonData.getJSONArray("value");
    for (int i = 0; i < performanceArray.length(); i++) {
      JSONObject performance = performanceArray.getJSONObject(i);
      int counterId = performance.getJSONObject("id").getInt("counterId");
      String valuesString = performance.getString("value");
      data.put(counterId, valuesString);
    }
    collection.put("header", header);
    collection.put("data", data);
    metadata.put("performance", collection);
    node.setMetadata(metadata);

    result.add(node);

    return result;
  }
}
