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

import org.apache.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public abstract class BasicModel {

  private static final Logger LOG = Logger.getLogger(BasicModel.class.getName());
  JSONObject jsonData;

  /**
   *
   * @return
   */
  public String getKey() {
    try {
      return jsonData.getJSONObject("MOR").getString("val");
    } catch (JSONException ex) {
      LOG.warn(ex);
      return "";
    }
  }

  /**
   *
   * @return
   */
  public String getName() {
    try {
      return jsonData.getString("name");
    } catch (JSONException ex) {
      LOG.warn(ex);
      return "";
    }
  }

  /**
   *
   * @return
   */
  public abstract String getType();

}
