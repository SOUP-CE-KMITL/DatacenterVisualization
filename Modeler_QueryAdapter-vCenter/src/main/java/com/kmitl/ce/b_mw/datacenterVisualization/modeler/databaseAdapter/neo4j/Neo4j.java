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
package com.kmitl.ce.b_mw.datacenterVisualization.modeler.databaseAdapter.neo4j;

import com.sun.jersey.api.client.*;
import java.util.*;
import javax.ws.rs.core.MediaType;
import org.apache.log4j.Logger;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class Neo4j {

  private static final Logger LOG = Logger.getLogger(Neo4j.class.getName());
  //private static final String SERVER_ROOT_URI = "http://neo1.cloudapp.net:7474/";
  private static String SERVER_ROOT_URI = "http://localhost:7474/";
  private static String nodeEntryPointUri = SERVER_ROOT_URI + "db/data/cypher";

  public static boolean createNode(String nodeLabel, Map<String, Object> attributes) {
    String query;
    if (match(attributes.get("key").toString()) != null) {
      query = "MATCH n WHERE n.key = '" + attributes.get("key").toString() + "'";
      for (String key : attributes.keySet()) {
        Object value = attributes.get(key);
        if (value != null) {
          if (value instanceof String) {
            query += " SET n." + key + " = '" + value + "'";
          } else {
            query += " SET n." + key + " = " + value;
          }
        }
      }
      if (nodeLabel != null) {
        query += " SET n:" + nodeLabel;
      }
      query += " RETURN n";
    } else {
      query = "CREATE (n ";
      if (nodeLabel != null) {
        query += ":" + nodeLabel + " ";
      }
      query += serializeAttribute(attributes) + ") RETURN n";
    }
    return executeQuery(query) != null;
  }

  public static JSONObject match(String key) {
    String query = "MATCH n WHERE n.key = '" + key + "' RETURN n";
    JSONObject result = executeQuery(query);

    if (result != null) {
      try {
        result = result.getJSONArray("data").getJSONArray(0).getJSONObject(0).getJSONObject("data");
      } catch (JSONException ex) {
        result = null;
      }
    }

    return result;
  }

  public static boolean addRelation(String node1key, String node2key, String relType, Map<String, Object> attributes) {
    String query = "MATCH (n1 {key:'" + node1key + "'})";
    query += "MATCH (n2 {key:'" + node2key + "'})";
    query += "CREATE UNIQUE (n1)-[r:" + relType;
    if (attributes != null) {
      query += serializeAttribute(attributes);
    }
    query += "]->(n2)";
    query += "RETURN n1, n2, r";
    return executeQuery(query) != null;
  }

  private static String serializeAttribute(Map<String, Object> attributes) {
    if (attributes == null) {
      attributes = new HashMap<>();
    }

    String body = "{";

    for (String key : attributes.keySet()) {
      if (attributes.get(key) != null) {
        body += key + " : \'" + attributes.get(key) + "',";
      }
    }

    if (body.endsWith(",")) {
      body = body.substring(0, body.length() - 1);
    }

    body += "}";

    return body;
  }

  private static String createJSONQuery(String statement) {
    return "{\"query\" : \"" + statement + "\"}";
  }

  private static JSONObject executeQuery(String query) {
    WebResource resource = Client.create().resource(nodeEntryPointUri);

    ClientResponse response = resource.accept(MediaType.APPLICATION_JSON)
            .type(MediaType.APPLICATION_JSON)
            .entity(createJSONQuery(query))
            .post(ClientResponse.class);

    JSONObject jsonResault = null;

    if (response.getStatus() == 200) {
      jsonResault = new JSONObject(response.getEntity(String.class));
    }

    response.close();

    return jsonResault;
  }
}
