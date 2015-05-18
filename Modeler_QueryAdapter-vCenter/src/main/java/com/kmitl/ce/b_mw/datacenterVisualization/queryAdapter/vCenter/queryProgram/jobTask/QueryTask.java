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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.jobTask;

import java.io.IOException;
import java.util.concurrent.Callable;
import org.apache.log4j.Logger;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataIO.StorageConnecter;
import com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.objectQuery.Queryable;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class QueryTask implements Callable<JSONObject> {

  private static final Logger LOG = Logger.getLogger(QueryTask.class.getName());

  Queryable objectQuery;
  StorageConnecter storageConnecter;

  public QueryTask(Queryable objectQuery, StorageConnecter storageConnecter) {
    this.objectQuery = objectQuery;
    this.storageConnecter = storageConnecter;
  }

  @Override
  public JSONObject call() {
    try {
      JSONObject results = objectQuery.excuteQuery();
      JSONArray data = results.getJSONArray("data");
      for (int i = 0; i < data.length(); i++) {
        storageConnecter.writeFile(data.getJSONObject(i).toString(), objectQuery.getClass().getSimpleName());
      }
      LOG.info("Push data succeed : " + objectQuery.getClass().getSimpleName());
      return results;
    } catch (IOException ex) {
      LOG.info("Push data fail : " + objectQuery.getClass().getSimpleName(), ex);
    } catch (JSONException ex) {
      LOG.error("Fail to write " + objectQuery.getClass().getSimpleName() + " data", ex);
    } catch (Exception ex) {
      LOG.error("Fail to write " + objectQuery.getClass().getSimpleName() + " data", ex);
    }
    return new JSONObject();
  }
}
