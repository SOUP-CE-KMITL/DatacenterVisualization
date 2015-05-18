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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.dataConverter.objectModel;

import com.kmitl.ce.b_mw.datacenterVisualization.common.genericModel.BasicNode;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class DistributedVirtualPortgroup extends BasicModel implements Convertable {

  /**
   *
   * @return
   */
  @Override
  public String getType() {
    return "Distributed virtual port group (VMware)";
  }

  @Override
  public List<BasicNode> toBasicNodes() {
    return new ArrayList<>();
  }

}
