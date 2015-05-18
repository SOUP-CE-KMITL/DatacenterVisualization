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
public class Resource extends BasicNode implements Generateable {

  Double value;
  String unit;
  List<String> owners = new ArrayList<>();

  public Resource() {
    nodeType = "Resource";
  }

  public Double getValue() {
    return value;
  }

  public void setValue(double value) {
    this.value = value;
  }

  public String getUnit() {
    return unit;
  }

  /**
   *
   * @param unit
   */
  public void setUnit(String unit) {
    this.unit = unit;
  }

  /**
   *
   * @return
   */
  public List<String> getOwners() {
    return owners;
  }

  public void setOwners(List<String> owners) {
    this.owners = owners;
  }

  /**
   *
   */
  @Override
  public void createQuery() {

    Map<String, Object> thisNodeAttribute = getAttributes();
    thisNodeAttribute.put("value", getValue());
    thisNodeAttribute.put("unit", getUnit());
    setAttributes(thisNodeAttribute);
    super.createQuery();

    Map<String, Object> nodeAttribute = new HashMap<>();

    for (String ownerKey : owners) {
      nodeAttribute = new HashMap<>();
      nodeAttribute.put("key", ownerKey);
      Neo4j.createNode(null, nodeAttribute);
      Neo4j.addRelation(ownerKey, getKey(), "has", null);
    }
  }
}
