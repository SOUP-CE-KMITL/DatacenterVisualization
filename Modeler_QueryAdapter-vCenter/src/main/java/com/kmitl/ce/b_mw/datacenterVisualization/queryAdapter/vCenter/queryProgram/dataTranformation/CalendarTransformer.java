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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataTranformation;

import flexjson.ObjectBinder;
import flexjson.ObjectFactory;
import flexjson.transformer.AbstractTransformer;
import java.lang.reflect.Type;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import org.json.JSONException;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class CalendarTransformer extends AbstractTransformer implements ObjectFactory {

  @Override
  public void transform(Object object) {
    Calendar c = (Calendar) object;
    getContext().transform(c.get(Calendar.DAY_OF_MONTH) + "/" + c.get(Calendar.MONTH) + "/" + c.get(Calendar.YEAR) + " " + c.get(Calendar.HOUR_OF_DAY) + ":" + c.get(Calendar.MINUTE) + ":" + c.get(Calendar.SECOND) + "." + c.get(Calendar.MILLISECOND) + " " + c.get(Calendar.ZONE_OFFSET));
  }

  @Override
  public Object instantiate(ObjectBinder context, Object value, Type targetType, Class targetClass) {
    try {
      SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss.SSS Z");
      return sdf.parse(value.toString());
    } catch (ParseException ex) {
      throw new JSONException(String.format("Failed to parse %s", value));
    }
  }
}
