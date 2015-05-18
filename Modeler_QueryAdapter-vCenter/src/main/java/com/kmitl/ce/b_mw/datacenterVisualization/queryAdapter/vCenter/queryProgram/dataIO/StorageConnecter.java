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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.queryProgram.dataIO;

import java.io.*;
import java.nio.charset.Charset;
import java.nio.file.*;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.LineIterator;
import org.apache.log4j.Logger;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class StorageConnecter {

  private static final Logger LOG = Logger.getLogger(StorageConnecter.class.getName());

  private final String path;
  private final String fileName;

  public StorageConnecter(String path, String fileName) {
    this.path = path;
    this.fileName = fileName;
  }

  /**
   *
   * @param json
   * @param subPath
   * @throws IOException
   */
  public void writeFile(String json, String subPath) throws IOException {
    Path folder = Paths.get(this.path, subPath).toAbsolutePath().normalize();
    folder = Files.createDirectories(folder);
    Path filePath = folder.resolve(fileName);
    OpenOption[] options = new OpenOption[2];
    options[0] = StandardOpenOption.CREATE;
    options[1] = StandardOpenOption.APPEND;
    try (BufferedWriter out = Files.newBufferedWriter(filePath, Charset.forName("UTF-8"), options)) {
      out.write(json + "\n");
      out.flush();
    } catch (IOException ex) {
      LOG.error("Couldn't write to " + filePath, ex);
    }
  }

  /**
   *
   * @param subPath
   * @return
   */
  public LineIterator openFile(String subPath) {
    Path folder = Paths.get(this.path, subPath).toAbsolutePath().normalize();
    Path filePath = folder.resolve(fileName);
    LineIterator li;
    try {
      li = FileUtils.lineIterator(filePath.toFile(), "UTF-8");
    } catch (IOException ex) {
      LOG.error("Couldn't open file due to : ", ex);
      li = null;
    }
    return li;
  }

  /**
   *
   * @param li
   * @return
   */
  public String readLine(LineIterator li) {
    try {
      return (String) li.next();
    } catch (Exception ex) {
      LOG.info("Read to end of file");
      return null;
    }
  }
}
