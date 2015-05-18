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

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.kmitl.ce.b_mw.datacenterVisualization.modeler.databaseAdapter.neo4j.Neo4j;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;
import org.apache.log4j.Logger;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class BasicNode implements Generateable {

  private static final Logger LOG = Logger.getLogger(BasicNode.class.getName());

  private String key;
  private String name;

  protected String nodeType;
  private String subType;
  private Map<String, Object> attributes = new HashMap<>();
  private Map<String, Object> metadata = new HashMap<>();

  public String getKey() {
    return key;
  }

  public void setKey(String key) {
    this.key = key;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getNodeType() {
    return nodeType;
  }

  public void setNodeType(String nodeType) {
    this.nodeType = nodeType;
  }

  public String getSubType() {
    return subType;
  }

  public void setSubType(String subType) {
    this.subType = subType;
  }

  public Map<String, Object> getAttributes() {
    return new HashMap<>(attributes);
  }

  public void setAttributes(Map<String, Object> attributes) {
    if (this.attributes != null) {
      this.attributes = attributes;
    } else {
      this.attributes = new HashMap<>();
    }
  }

  public Map<String, Object> getMetadata() {
    return new HashMap<>(metadata);
  }

  public void setMetadata(Map<String, Object> metadata) {
    if (this.metadata != null) {
      this.metadata = metadata;
    } else {
      this.metadata = new HashMap<>();
    }
  }

  @Override
  public void createQuery() {
    Map<String, Object> nodeProperties = new HashMap<>();
    if (getKey() != null) {
      nodeProperties.put("key", getKey());
    }
    if (getName() != null) {
      nodeProperties.put("name", getName());
    }
    if (getSubType() != null) {
      nodeProperties.put("type", getSubType());
    }

    Map<String, Object> nodeAttributes = getAttributes();
    if (nodeAttributes != null) {
      for (String attributeKey : nodeAttributes.keySet()) {
        if (nodeAttributes.get(attributeKey) != null) {
          nodeProperties.put(attributeKey, nodeAttributes.get(attributeKey));
        }
      }
    }

    Neo4j.createNode(getNodeType(), nodeProperties);

    if (metadata != null) {
      try {
        MongoClient mongoClient = new MongoClient("localhost");
        DB db = mongoClient.getDB("myproject");
        for (String metadataKey : metadata.keySet()) {
          DBCollection coll = db.getCollection(getKey() + "-" + metadataKey);
          Map<String, Object> collection = (Map<String, Object>) metadata.get(metadataKey);
          BasicDBObject header = new BasicDBObject();
          Map<String, Object> collectionHeader = (Map<String, Object>) collection.get("header");
          for (String headerKey : collectionHeader.keySet()) {
            header.append(headerKey, collectionHeader.get(headerKey).toString());
          }
          BasicDBObject query = new BasicDBObject("header", header);
          DBObject cursor = coll.findOne(query);
          if (cursor == null) {
            BasicDBObject data = new BasicDBObject();
            Map<String, Object> collectionData = (Map<String, Object>) collection.get("data");
            for (String dataKey : collectionData.keySet()) {
              data.append(dataKey, collectionData.get(dataKey).toString());
            }
            BasicDBObject doc = new BasicDBObject("header", header)
                    .append("data", data);
            coll.insert(doc);
          }
        }
      } catch (UnknownHostException ex) {
        LOG.error("Couldn't connect to MongoDB");
      }
    }
  }
}
