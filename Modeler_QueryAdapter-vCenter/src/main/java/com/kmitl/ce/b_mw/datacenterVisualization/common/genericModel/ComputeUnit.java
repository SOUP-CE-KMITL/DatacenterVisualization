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
package com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel;

import com.kmitl.ce.b_mw.datacenterVisualization.modeler.databaseAdapter.neo4j.Neo4j;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class ComputeUnit extends BasicNode implements Generateable {

  String parent = null;
  String state = null;
  List<String> devices = new ArrayList<>();

  /**
   *
   */
  public ComputeUnit() {
    nodeType = "ComputeUnit";
  }

  /**
   *
   * @return
   */
  public String getParent() {
    return parent;
  }

  /**
   *
   * @param parent
   */
  public void setParent(String parent) {
    this.parent = parent;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  /**
   *
   * @return
   */
  public List<String> getDevices() {
    return devices;
  }

  /**
   *
   * @param devices
   */
  public void setDevices(List<String> devices) {
    this.devices = devices;
  }

  @Override
  public void createQuery() {
    Map<String, Object> thisNodeAttribute = getAttributes();
    thisNodeAttribute.put("state", getState());
    setAttributes(thisNodeAttribute);
    super.createQuery();

    Map<String, Object> attributes;

    for (String device : devices) {
      attributes = new HashMap<>();
      attributes.put("key", device);
      Neo4j.createNode(null, attributes);
      Neo4j.addRelation(getKey(), device, "has", null);
    }
  }
}
