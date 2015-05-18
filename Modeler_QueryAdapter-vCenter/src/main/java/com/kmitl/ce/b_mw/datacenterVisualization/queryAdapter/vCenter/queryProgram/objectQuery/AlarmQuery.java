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

import com.vmware.vim25.*;
import com.vmware.vim25.mo.*;
import flexjson.JSONSerializer;
import java.util.*;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONObject;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.connection.Session;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataTranformation.CalendarTransformer;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class AlarmQuery implements Queryable {

  private static final Logger LOG = Logger.getLogger(AlarmQuery.class.getName());
  private final Session session;

  public AlarmQuery(Session session) {
    this.session = session;
  }

  @Override
  public JSONObject excuteQuery() {
    LOG.info("Start AlarmQuery.run");
    Map<String, AlarmInfo> alarmsMap = new HashMap<>();
    JSONSerializer serializer = new JSONSerializer();
    List<ManagedEntity> entities = session.getEntities();
    if (entities != null) {
      for (ManagedEntity entity : entities) {
        // LOG.info("Get alarms from " + entity.getMOR().getVal() + "/" + entity.getName());
        AlarmState[] alarmstates = entity.getDeclaredAlarmState();
        if (alarmstates != null) {
          for (AlarmState alarmState : alarmstates) {
            Alarm alarm = new Alarm(entity.getServerConnection(), alarmState.getAlarm());
            alarmsMap.put(alarm.getMOR().getVal(), alarm.getAlarmInfo());
          }
        }
      }
    }
    serializer.transform(new CalendarTransformer(), Calendar.class);
    serializer.include("*");

    JSONObject data = new JSONObject();
    JSONArray arr = new JSONArray();
    for (String key : alarmsMap.keySet()) {
      arr.put(new JSONObject(serializer.serialize(alarmsMap.get(key))));
    }
    data.put("data", arr);
    return data;
  }
}
