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
public class Device extends BasicNode implements Generateable {

  List<String> owners = new ArrayList<>();
  List<String> baseResources = new ArrayList<>();
  List<Resource> ownedResources = new ArrayList<>();
  List<String> resourcePools = new ArrayList<>();
  List<String> connect = new ArrayList<>();

  public Device() {
    nodeType = "Device";
  }

  public List<String> getBaseResources() {
    return new ArrayList<>(baseResources);
  }

  /**
   *
   * @param baseResources
   */
  public void setBaseResources(List<String> baseResources) {
    this.baseResources = baseResources;
  }

  public List<Resource> getOwnedResources() {
    return new ArrayList<>(ownedResources);
  }

  /**
   *
   * @param ownedResources
   */
  public void setOwnedResources(List<Resource> ownedResources) {
    this.ownedResources = ownedResources;
  }

  public List<String> getConnect() {
    return new ArrayList<>(connect);
  }

  /**
   *
   * @param connect
   */
  public void setConnect(List<String> connect) {
    this.connect = connect;
  }

  /**
   *
   * @return
   */
  public List<String> getOwners() {
    return new ArrayList<>(owners);
  }

  /**
   *
   * @param owners
   */
  public void setOwners(List<String> owners) {
    this.owners = owners;
  }

  /**
   *
   * @return
   */
  public List<String> getResourcePools() {
    return new ArrayList<>(resourcePools);
  }

  public void setResourcePools(List<String> resourcePools) {
    this.resourcePools = resourcePools;
  }

  @Override
  public void createQuery() {
    super.createQuery();

    Map<String, Object> nodeAttribute;
    for (String owner : owners) {
      nodeAttribute = new HashMap<>();
      nodeAttribute.put("key", owner);
      Neo4j.createNode(null, nodeAttribute);
      Neo4j.addRelation(owner, getKey(), "has", null);
    }

    for (String baseResource : baseResources) {
      nodeAttribute = new HashMap<>();
      nodeAttribute.put("key", baseResource);
      Neo4j.createNode(null, nodeAttribute);
      Neo4j.addRelation(getKey(), baseResource, "use", null);
    }

    for (Resource ownedResource : ownedResources) {
      ownedResource.createQuery();
      Neo4j.addRelation(getKey(), ownedResource.getKey(), "own", null);
    }

    for (String resourcePool : resourcePools) {
      nodeAttribute = new HashMap<>();
      nodeAttribute.put("key", resourcePool);
      Neo4j.createNode(null, nodeAttribute);
      for (Resource ownedResource : ownedResources) {
        Neo4j.addRelation(resourcePool, ownedResource.getKey(), "has", null);
      }
    }

    for (String connectTo : connect) {
      nodeAttribute = new HashMap<>();
      nodeAttribute.put("key", connectTo);
      Neo4j.createNode(null, nodeAttribute);
      Neo4j.addRelation(getKey(), connectTo, "connect", null);
    }
  }

}
