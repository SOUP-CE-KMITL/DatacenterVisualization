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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.objectQuery;

import com.vmware.vim25.mo.*;
import java.util.*;
import org.apache.log4j.Logger;
import org.json.JSONObject;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.connection.Session;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class DatacenterQuery implements Queryable {

  private static final Logger LOG = Logger.getLogger(DatacenterQuery.class.getName());
  private final Session session;

  public DatacenterQuery(Session session) {
    this.session = session;
  }

  /**
   *
   * @return
   */
  @Override
  public JSONObject excuteQuery() {
    LOG.info("Start DatacenterQuery.run");

    List<String> includeFields = new ArrayList<>();

    includeFields.add("MOR.val");
    includeFields.add("alarmActionEabled");
    includeFields.add("availableField.*");
    includeFields.add("configIssue.*");
    includeFields.add("configStatus");
    includeFields.add("configurationEx.*");
    includeFields.add("customValue.*");
    includeFields.add("datastores.MOR.val");
    includeFields.add("disabledMethod");
    includeFields.add("effectiveRole");
    includeFields.add("hostFolder.childEntity.MOR.val");
    includeFields.add("hostFolder.childEntity.class");
    includeFields.add("hostFolder.childEntity.hosts.MOR.val");
    includeFields.add("name");
    includeFields.add("networks.MOR.val");
    includeFields.add("networkFolder.MOR.val");
    includeFields.add("overallStatus");
    includeFields.add("parent.MOR.val");
    includeFields.add("permission.*");
    includeFields.add("recentTasks.MOR.val");
    includeFields.add("tag");
    includeFields.add("triggeredAlarmState.alarm.val");
    includeFields.add("triggeredAlarmState.overallStatus");
    includeFields.add("triggeredAlarmState.time");
    includeFields.add("values");
    includeFields.add("vmFolder.MOR.val");

    JSONObject json = session.query(Datacenter.class, includeFields.toArray(new String[0]));

    return json;
  }
}
