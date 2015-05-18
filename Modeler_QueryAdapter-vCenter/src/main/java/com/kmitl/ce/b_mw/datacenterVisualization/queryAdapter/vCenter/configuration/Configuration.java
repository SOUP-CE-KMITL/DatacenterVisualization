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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.configuration;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class Configuration {

  private final Properties prop;

  /**
   *
   * @param configPath
   * @throws java.lang.Exception
   */
  public Configuration(String configPath) throws Exception {
    prop = new Properties();
    try {
      if (configPath != null) {
        InputStream inputStream = new FileInputStream(configPath);
        prop.load(inputStream);
      } else {
        throw new IOException("Configuration not exist");
      }
    } catch (IOException ex) {
      throw new IOException("Couldn't get adapter configuration due to : " + ex.getMessage());
    }
  }

  public Properties getProp() {
    return prop;
  }

  public int getTimeLimit() {
    return Integer.parseInt(prop.getProperty("timeLimit", "30"));
  }

  public int getThreadLimit() {
    return Integer.parseInt(prop.getProperty("threadLimit", "1"));
  }

  public int getMaxRetry() {
    return Integer.parseInt(prop.getProperty("maxRetry", "3"));
  }

  public String getDataPath() {
    return prop.getProperty("dataPath", "data");
  }

  public String getUsername() {
    return prop.getProperty("username", null);
  }

  public String getPassword() {
    return prop.getProperty("password", null);
  }

  public String getvCenter() {
    return prop.getProperty("vCenter", null);
  }

  public List<String> getQueryType() {
    return Arrays.asList(prop.getProperty("queryType", "AlarmQuery, TaskQuery, ClusterComputeResourceQuery, ComputeResourceQuery, DatacenterQuery, DatastoreQuery, DistributedVirtualSwitchQuery, DistributedVirtualPortgroupQuery, EventQuery, FolderQuery, HostSystemQuery, NetworkQuery, PerformanceQuery, ResourcePoolQuery, VirtualAppQuery, VirtualMachineQuery").split(",\\s*"));
  }

  public String getHostname() {
    return prop.getProperty("hostname", "localhost");
  }
}
