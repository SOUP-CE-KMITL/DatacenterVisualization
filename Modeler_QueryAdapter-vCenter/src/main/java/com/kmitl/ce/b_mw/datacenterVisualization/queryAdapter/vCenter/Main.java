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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter;

import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.objectQuery.Queryable;
import java.io.File;
import static java.lang.System.exit;
import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.nio.file.FileSystems;
import java.rmi.RemoteException;
import org.apache.commons.io.LineIterator;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.configuration.Configuration;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.connection.Session;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataIO.StorageConnecter;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.jobTask.QueryTask;
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.BasicNode;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.dataStorageService.StorageAdapter;
import flexjson.JSONSerializer;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.dataConverter.objectModel.Convertable;
import flexjson.JSONDeserializer;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class Main {

  private static final Logger LOG = Logger.getLogger(Main.class.getName());
  private static String specificFileDate = null;
  private static Boolean usingQueueFalg = false;
  private static String configurationFilePath = FileSystems.getDefault().getPath(new File(System.getProperty("user.dir")).getAbsolutePath(), "config.properties").toString();

  public static Configuration configuration;

  public static Session session;

  public static void main(String args[]) {
    processArguments(args);
    configuration = loadConfigurationFile();
    session = createSession(configuration);
    if (specificFileDate == null) {
      queryData();
    }
    generateNodeFromQuery();
    session.destroy();
  }

  public static void processArguments(String args[]) {
    for (int i = 0; i < args.length; i++) {
      switch (args[i]) {
        case "-l":
          try {
            specificFileDate = args[i + 1];
          } catch (IndexOutOfBoundsException ex) {
            System.err.println("Please specific your query date");
            exit(1);
          }
          System.out.println("Program will reading file from local with specific date to read (with no connection to vCenter)");
          i++;
          break;
        case "-q":
          usingQueueFalg = true;
          System.out.println("Program will use queue as buffer");
          break;
        case "-c":
          i++;
        default:
          System.out.println("Specific configuration file path to : " + args[i]);
          File inputFile = new File(args[i]);
          if (inputFile.exists() && inputFile.isFile()) {
            configurationFilePath = inputFile.getAbsolutePath();
          }
      }
    }
  }

  public static Configuration loadConfigurationFile() {
    // log4j configuration
    PropertyConfigurator.configure(configurationFilePath);
    // query configuration
    try {
      return new Configuration(configurationFilePath);
    } catch (Exception ex) {
      exit(-1);
      return null;
    }
  }

  public static Session createSession(Configuration config) {
    for (int i = 0; session == null && i < config.getMaxRetry(); i++) {
      try {
        session = new Session(config, specificFileDate);
      } catch (RemoteException ex) {
        LOG.info("Could not create session : Count " + i, ex);
      }
    }
    if (session == null) {
      LOG.error("Get session fail, couldn't initial connection.");
      exit(0);
    }
    return session;
  }

  private static void queryData() {
    StorageConnecter storageConnecter = session.getStorageConnecter();
    ExecutorService executor = Executors.newFixedThreadPool(session.getConfig().getThreadLimit());

    Map<String, Future> results = new HashMap<>();
    for (String queryType : session.getConfig().getQueryType()) {
      try {
        Class queryClass = Class.forName("com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.objectQuery." + queryType);
        Constructor constructor = queryClass.getConstructor(Session.class);
        Object instanceOfMyClass = constructor.newInstance(session);
        Queryable queryClassInstance = ((Queryable) instanceOfMyClass);
        QueryTask queryTask = new QueryTask(queryClassInstance, storageConnecter);
        Future submitedTask = executor.submit(queryTask);
        results.put(queryType, submitedTask);
      } catch (IllegalArgumentException | InvocationTargetException | ClassNotFoundException | InstantiationException | IllegalAccessException | NoSuchMethodException | SecurityException ex) {
        LOG.error("No query class for : " + queryType, ex);
      }
    }

    LOG.info("Time limit is set to " + session.getConfig().getTimeLimit() + " minutes");

    try {
      executor.shutdown();
      executor.awaitTermination(session.getConfig().getTimeLimit(), TimeUnit.MINUTES);
    } catch (InterruptedException ex) {
      LOG.error(null, ex);
    }

    String runningStatus = "";
    for (String resultName : results.keySet()) {
      runningStatus = runningStatus.concat("\n " + resultName + " status : " + results.get(resultName).isDone());
    }

    LOG.info(runningStatus);
  }

  private static void generateNodeFromQuery() {
    StorageAdapter storage;
    if (usingQueueFalg) {
      storage = new StorageAdapter(session.getConfig().getHostname());
    } else {
      storage = null;
    }
    StorageConnecter p = session.getStorageConnecter();
    for (String queryType : session.getConfig().getQueryType()) {
      LOG.info(queryType);
      LineIterator li = p.openFile(queryType);
      queryType = "com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.dataConverter.objectModel." + queryType.subSequence(0, queryType.length() - 5);
      if (li != null) {
        while (true) {
          String readResult = p.readLine(li);
          if (readResult == null) {
            break;
          } else {
            Object instanceOfMyClass;
            try {
              Class queryClass = Class.forName(queryType);
              Constructor constructor = queryClass.getConstructor(String.class);
              instanceOfMyClass = constructor.newInstance(readResult);
            } catch (IllegalArgumentException | InvocationTargetException | ClassNotFoundException | InstantiationException | IllegalAccessException | NoSuchMethodException | SecurityException ex) {
              LOG.error("No query class for : " + queryType, ex);
              break;
            }
            List<BasicNode> convertResult = ((Convertable) instanceOfMyClass).toBasicNodes();
            for (BasicNode node : convertResult) {
              String data;
              if (node.getClass().getName().equals(BasicNode.class.getName())) {
                data = new JSONSerializer().deepSerialize(node);
              } else {
                try {
                  data = new JSONSerializer().deepSerialize(Class.forName(node.getClass().getName()).cast(node));
                } catch (ClassNotFoundException ex) {
                  LOG.error("Couldn't cast result", ex);
                  break;
                }
              }
              if (storage != null) {
                storage.send(data);
              } else {
                //LOG.error("Couldn't send data to message queue");
                node = (BasicNode) (new JSONDeserializer<>().deserialize(data));
                try {
                  node.createQuery();
                  LOG.info("Modeling succeed");
                } catch (Exception ex) {
                  LOG.error("Modeling fail", ex);
                }
              }
            }
          }
        }
      }
    }
  }
}
