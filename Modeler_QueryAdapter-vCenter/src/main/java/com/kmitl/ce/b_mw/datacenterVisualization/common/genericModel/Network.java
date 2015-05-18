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
public class Network extends BasicNode implements Generateable {

  List<String> connect = new ArrayList<>();

  /**
   *
   */
  public Network() {
    nodeType = "Network";
  }

  /**
   *
   * @return
   */
  public List<String> getConnect() {
    return connect;
  }

  public void setConnect(List<String> connect) {
    this.connect = connect;
  }

  @Override
  public void createQuery() {
    super.createQuery();
    Map<String, Object> attributes;
    for (String connectTo : connect) {
      attributes = new HashMap<>();
      attributes.put("key", connectTo);
      Neo4j.createNode(null, attributes);
      Neo4j.addRelation(getKey(), connectTo, "connect", null);
      Neo4j.addRelation(connectTo, getKey(), "connect", null);
    }
  }
}
