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
import java.rmi.RemoteException;
import java.util.*;
import org.apache.log4j.Logger;
import org.json.*;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.connection.Session;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataTranformation.CalendarTransformer;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class EventQuery implements Queryable {

  private static final Logger LOG = Logger.getLogger(EventQuery.class.getName());
  private final Session session;
  private final Calendar startTime;
  private final Calendar endTime;

  /**
   *
   * @param session
   */
  public EventQuery(Session session) {
    this.session = session;
    this.startTime = session.getStartTime();
    this.endTime = session.getEndTime();
  }

  /**
   *
   * @return
   */
  @Override
  public JSONObject excuteQuery() {
    LOG.info("Start EventQuery.run to get events from " + startTime.getTime() + " to " + endTime.getTime());

    List<ManagedEntity> entities = session.getEntities();

    JSONSerializer serializer;
    serializer = new JSONSerializer();
    serializer.transform(new CalendarTransformer(), Calendar.class);
    serializer.transform(new CalendarTransformer(), GregorianCalendar.class);
    serializer.include("*");

    JSONObject data = new JSONObject();
    JSONArray events = new JSONArray();
    data.put("data", events);

    Map<String, List<Event>> objects_event = new HashMap<>();
    EventManager eventManager = session.getEventManager();

    if (entities != null) {
      EventFilterSpec efs = new EventFilterSpec();
      EventFilterSpecByTime spec_time = new EventFilterSpecByTime();
      EventFilterSpecByEntity spec_entity = new EventFilterSpecByEntity();

      spec_time.beginTime = startTime;
      spec_time.endTime = endTime;
      efs.setTime(spec_time);

      for (ManagedEntity entity : entities) {

        LOG.info("Get events from " + entity.getMOR().getVal() + "/" + entity.getName());
        String entityName = entity.getMOR().getVal();

        spec_entity.setEntity(entity.getMOR());
        spec_entity.setRecursion(EventFilterSpecRecursionOption.self);
        efs.setEntity(spec_entity);

        EventHistoryCollector eventCollector;
        try {
          eventCollector = eventManager.createCollectorForEvents(efs);
          Event[] e = eventCollector.readNextEvents(1);
          while (e != null) {
            events.put(new JSONObject(e[0]));
            LOG.info("Retrive event " + e[0].key);
            try {
              e = eventCollector.readNextEvents(1);
            } catch (RemoteException ex) {
              LOG.warn("End of event collection " + entityName, ex);
              break;
            }
          }
          eventCollector.destroyCollector();
        } catch (RemoteException ex) {
          LOG.error("Fail to retrive events from " + entityName, ex);
        } catch (Exception ex) {
          LOG.error("Fail to retrive events from " + entityName, ex);
        }
        break;
      }
    }

    return data;
  }
}
