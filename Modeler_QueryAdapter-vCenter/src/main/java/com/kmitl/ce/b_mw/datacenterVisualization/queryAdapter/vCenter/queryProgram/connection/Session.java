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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.connection;

import com.vmware.vim25.mo.*;
import flexjson.JSONException;
import flexjson.JSONSerializer;
import java.rmi.RemoteException;
import java.text.SimpleDateFormat;
import java.util.*;
import org.apache.log4j.Logger;
import org.json.JSONObject;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.configuration.Configuration;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataIO.StorageConnecter;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataTranformation.CalendarTransformer;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class Session {

  private static final Logger LOG = Logger.getLogger(Session.class.getName());

  private final StorageConnecter storageConnecter;
  private final Connection connection;
  private final List<ManagedEntity> entities;
  private final Configuration config;
  private final Calendar startTime;
  private final Calendar endTime;

  private List<ManagedEntity> searchedEntities = new ArrayList<>();

  public Session(Configuration config, String specificFileDate) throws RemoteException {
    this.config = config;
    entities = new ArrayList<>();

    if (specificFileDate == null) {
      connection = new Connection(config.getUsername(), config.getPassword(), config.getvCenter());
      if (connection.connect() == false) {
        LOG.error("Connection fail...");
        throw new RemoteException();
      }
      LOG.info("Create connection success...");
      startTime = connection.getService().currentTime();
      endTime = (Calendar) startTime.clone();
      startTime.add(Calendar.DATE, -1);
      Folder rootFolder = connection.getService().getRootFolder();
      entities.addAll(Arrays.asList(new InventoryNavigator(rootFolder).searchManagedEntities(true)));
      SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyy(HH.mm.ss)");
      String endTimeString = String.valueOf(format.format(endTime.getTime().getTime()));
      storageConnecter = new StorageConnecter(config.getDataPath(), endTimeString);
    } else {
      startTime = endTime = null;
      connection = null;
      storageConnecter = new StorageConnecter(config.getDataPath(), specificFileDate);
    }
  }

  private List<ManagedEntity> searchEntities(ManagedEntity currentPosition) throws Exception {
    LOG.info("Start query entities list using given filter");
    try {
      String[][] typeinfo = new String[][]{
        new String[]{
          "ManagedEntity",}
      };
      ManagedEntity[] childEntities = new InventoryNavigator(currentPosition).searchManagedEntities(typeinfo, false);
      for (ManagedEntity inspectedEntity : childEntities) {
        if (!searchedEntities.contains(inspectedEntity)) {
          //if (!datacenterFilter.contains("all") || !(inspectedEntity.getClass().getSimpleName().equals("Datacenter") && datacenterFilter.contains(inspectedEntity.getName()))) {
          //if (!resourcePoolFilter.contains("all") || !(inspectedEntity.getClass().getSimpleName().equals("ResourcePool") && resourcePoolFilter.contains(inspectedEntity.getName()))) {
          //LOG.log(Priority.INFO,("Add entity : " + inspectedEntity.getMOR().getVal() + "/" + inspectedEntity.getName());
          //System.out.println("Add entity : " + inspectedEntity.getMOR().getVal() + "/" + inspectedEntity.getName());
          System.out.println(inspectedEntity.getClass().getSimpleName() + ":" + inspectedEntity.getName());
          searchedEntities.add(inspectedEntity);
          searchEntities(inspectedEntity);
          //}
          //}
        }
      }
    } catch (RemoteException ex) {
      LOG.error("Could not retrive managedEntities", ex);
      throw new Exception("Could not retrive managedEntities", ex);
    }
    return searchedEntities;
  }

  public Calendar getStartTime() {
    return startTime;
  }

  public Calendar getEndTime() {
    return endTime;
  }

  /**
   *
   * @return
   */
  public List<ManagedEntity> getEntities() {
    return entities;
  }

  public TaskManager getTaskManager() {
    return connection.getService().getTaskManager();
  }

  /**
   *
   * @return
   */
  public EventManager getEventManager() {
    return connection.getService().getEventManager();
  }

  /**
   *
   * @return
   */
  public PerformanceManager gerPerformanceManager() {
    return connection.getService().getPerformanceManager();
  }

  /**
   *
   * @return
   */
  public StorageConnecter getStorageConnecter() {
    return storageConnecter;
  }

  /**
   *
   * @return
   */
  public Configuration getConfig() {
    return config;
  }

  public JSONObject query(Class queryType, String[] includeFields) {
    String json;
    try {
      JSONSerializer serializer = new JSONSerializer();
      json = "{\"data\":[ ";
      if (entities != null) {
        for (ManagedEntity entitie : entities) {
          try {
            if (entitie.getClass().equals(queryType)) {
              serializer.include(includeFields);
              serializer.transform(new CalendarTransformer(), Calendar.class);
              serializer.exclude("*");
              json = json + serializer.serialize(Class.forName(queryType.getName()).cast(entitie)) + ",";
            }
          } catch (JSONException ex) {
            LOG.error("Found JSON exception", ex);
          }
        }
      }
      json = json.substring(0, json.length() - 1) + "]}";
    } catch (ClassNotFoundException ex) {
      LOG.error("Query fail: Invalid class for query", ex);
      json = "{}";
    }
    return new JSONObject(json);
  }

  /**
   *
   */
  public void destroy() {
    if (connection != null) {
      connection.disconnect();
    }
    LOG.info("Session destroy...");
  }

  @Override
  protected void finalize() throws Throwable {
    try {
      if (connection != null) {
        connection.disconnect();
      }
    } finally {
      super.finalize();
    }
  }
}
