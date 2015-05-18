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
package com.kmitl.ce.b_mw.datacenterVisualization.modeler;

import com.rabbitmq.client.ConsumerCancelledException;
import com.rabbitmq.client.ShutdownSignalException;
import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.BasicNode;
import static com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.Main.configuration;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.dataStorageService.StorageAdapter;
import flexjson.JSONDeserializer;
import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystems;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.configuration.Configuration;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.connection.Session;
import static java.lang.System.exit;
import java.util.logging.Level;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class Main {

  private static final Logger LOG = Logger.getLogger(Main.class.getName());
  private static String configurationFilePath = FileSystems.getDefault().getPath(new File(System.getProperty("user.dir")).getAbsolutePath(), "config.properties").toString();
  
  public static Session session;


  public static void main(String args[]) throws IOException {
    processArguments(args);
    configuration = loadConfigurationFile();

    StorageAdapter storage = new StorageAdapter(configuration.getHostname());

    boolean ideal = false;

    while (true) {
      try {
        String message = storage.receive();
        if (message != null) {
          ideal = false;
          BasicNode node = (BasicNode) (new JSONDeserializer<>().deserialize(message));
          try {
            node.createQuery();
            LOG.info("Modeling succeed");
          } catch (Exception ex) {
            LOG.error("Modeling fail", ex);
          }
        } else {
          if (ideal == false) {
            LOG.info("No data to process, enter ideal state");
          }
          ideal = true;
        }
      } catch (ShutdownSignalException ex) {
        LOG.error("Server shutdown ", ex);
        break;
      } catch (InterruptedException | ConsumerCancelledException ex) {
        LOG.error("Exception found ", ex);
        break;
      }
    }

    storage.destroy();
    exit(0);
  }
  
  public static void processArguments(String args[]) {
    for (String arg : args) {
      switch (arg) {
        default:
          System.out.println("Specific configuration file path to : " + arg);
          File inputFile = new File(arg);
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

  public static Configuration getConfig(String args[]) {
    String configPath = FileSystems.getDefault().getPath(new File(System.getProperty("user.dir")).getAbsolutePath(), "config.properties").toString();
    Configuration config;

    if (args.length < 1) {
      PropertyConfigurator.configure(configPath);
      LOG.info("Going to use default path: " + configPath);
    } else {
      PropertyConfigurator.configure(args[0]);
      // [TODO]
      try {
        config = new Configuration(args[0]);
      } catch (Exception ex) {
        java.util.logging.Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
      }
    }

    try {
      return new Configuration(configPath);
    } catch (Exception ex) {
      System.out.println("Could not get config file");
      return null;
    }
  }
}
