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
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.connection.Session;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataTranformation.CalendarTransformer;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class PerformanceQuery implements Queryable {

  private static final Logger LOG = Logger.getLogger(PerformanceQuery.class.getName());
  private final Session session;
  private final Calendar startTime;
  private final Calendar endTime;
  private final int interval;

  public PerformanceQuery(Session session) {
    this.session = session;
    this.startTime = session.getStartTime();
    this.endTime = session.getEndTime();
    this.interval = getFinestInterval(session.gerPerformanceManager());
  }

  /**
   *
   * @return @throws Exception
   */
  @Override
  public JSONObject excuteQuery() throws Exception {
    LOG.info("Start PerformanceQuery.run to get performance from " + startTime.getTime() + " to " + endTime.getTime());
    LOG.info("Finest interval for query data is " + interval);

    Map<String, PerfEntityMetricBase[]> performanceMap = new HashMap<>();
    List<ManagedEntity> entities = session.getEntities();
    JSONSerializer serializer = new JSONSerializer();
    Map<Integer, PerfCounterInfo> countersMap = new HashMap<>();

    PerformanceManager pm = session.gerPerformanceManager();

    // Create map for performance counter
    PerfCounterInfo[] perfCounters = pm.getPerfCounter();
    for (PerfCounterInfo perfInfo : perfCounters) {
      countersMap.put(perfInfo.getKey(), perfInfo);
    }

    for (ManagedEntity entity : entities) {
      String entityId = entity.getMOR().getVal();
      try {
        PerfProviderSummary pfs = getPerfProviderSummary(pm, entity);
        if (pfs != null) {
          PerfMetricId[] perfMetrics = getAvailablePerfMetric(pm, entity, startTime, endTime, interval);
          if (perfMetrics != null) {
            // Add avalible counter to query array
            ArrayList<PerfMetricId> query = new ArrayList<>();
            for (PerfMetricId metricId : perfMetrics) {
              PerfCounterInfo matricInfo = countersMap.get(metricId.getCounterId());
              if (matricInfo.getRollupType().equals(PerfSummaryType.average) || matricInfo.getRollupType().equals(PerfSummaryType.summation)) {
                query.add(metricId);
              }
            }

            PerfQuerySpec qSpec = createPerfQuerySpec(query, entity, startTime, endTime, interval);

            PerfQuerySpec[] qSpecs = new PerfQuerySpec[]{
              qSpec
            };

            PerfEntityMetricBase[] pembs = null;
            try {
              LOG.info("Get performance from " + entityId + "/" + entity.getName());
              pembs = pm.queryPerf(qSpecs);
            } catch (RemoteException ex) {
              LOG.info("Fail to retrive performance data from " + entityId + " : " + entity.getName(), ex);
            }

            if (pembs != null) {
              performanceMap.put(entity.getMOR().getVal(), pembs);
            }
          }
        }
      } catch (Exception ex) {
        LOG.error("Fail to retrive performance data for : " + entityId + ex);
      }
    }
    serializer.transform(new CalendarTransformer(), Calendar.class);
    serializer.include("*");

    try {
      JSONObject data = new JSONObject();
      JSONArray arr = new JSONArray();
      for (String key : performanceMap.keySet()) {
        arr.put(new JSONObject(serializer.serialize(performanceMap.get(key)[0])));
      }
      LOG.info("Get performance data succeed");
      data.put("data", arr);
      return data;
    } catch (JSONException ex) {
      throw ex;
    }
  }

  private static PerfProviderSummary getPerfProviderSummary(PerformanceManager pm, ManagedEntity entity) {
    String entityId = entity.getMOR().getVal();
    PerfProviderSummary pfs;
    try {
      pfs = pm.queryPerfProviderSummary(entity);
    } catch (InvalidArgument ex) {
      LOG.warn("No performance data for " + entityId + "/" + entity.getName());
      pfs = null;
    } catch (RemoteException ex) {
      LOG.error("Couldn't get sumary data due to : ", ex);
      pfs = null;
    }
    return pfs;
  }

  private static PerfMetricId[] getAvailablePerfMetric(PerformanceManager pm, ManagedEntity entity, Calendar startTime, Calendar endTime, int interval) {
    String entityId = entity.getMOR().getVal();
    PerfMetricId[] perfMetrics;
    try {
      perfMetrics = pm.queryAvailablePerfMetric(entity, startTime, endTime, interval);
    } catch (RemoteException ex) {
      LOG.error("Fail to retrive performance counter from " + entityId + ":" + entity.getName(), ex);
      perfMetrics = null;
    }
    return perfMetrics;
  }

  private static PerfQuerySpec createPerfQuerySpec(ArrayList<PerfMetricId> query, ManagedEntity entity, Calendar startTime, Calendar endTime, int interval) {
    // Set Spec to query in perfCounter
    PerfMetricId[] pmis = query.toArray(new PerfMetricId[query.size()]);
    PerfQuerySpec qSpec = new PerfQuerySpec();
    qSpec.setEntity(entity.getMOR());
    qSpec.setMetricId(pmis);
    qSpec.setStartTime(startTime);
    qSpec.setEndTime(endTime);
    qSpec.intervalId = interval;
    qSpec.setFormat("csv");

    return qSpec;
  }

  private int getFinestInterval(PerformanceManager pm) {
    int minInterval = -1;
    for (PerfInterval intervalInfo : pm.getHistoricalInterval()) {
      if (minInterval == -1 || intervalInfo.length < minInterval) {
        minInterval = intervalInfo.getSamplingPeriod();
      }
    }
    return minInterval;
  }
}
