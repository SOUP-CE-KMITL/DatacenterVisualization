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
package com.kmitl.ce.b_mw.datacenterVisualization.queryAdapter.vCenter.dataStorageService;

import com.rabbitmq.client.*;
import java.io.IOException;
import static java.lang.System.exit;
import org.apache.log4j.Logger;

/**
 *
 * @author Noppakorn Chaiboonruang
 */
public class StorageAdapter {

  private static final Logger LOG = Logger.getLogger(StorageAdapter.class.getName());

  private final String TASK_QUEUE_NAME = "task_queue";
  private Channel channel;
  private Connection connection;
  private QueueingConsumer consumer;

  public StorageAdapter(String hostname) {
    ConnectionFactory factory = new ConnectionFactory();
    factory.setHost(hostname);
    try {
      connection = factory.newConnection();
      channel = connection.createChannel();
      channel.queueDeclare(TASK_QUEUE_NAME, true, false, false, null);
    } catch (IOException ex) {
      LOG.error("Fail to create adapter due to ", ex);
      exit(1);
    }
    consumer = null;
  }

  public void send(String message) {
    try {
      channel.basicPublish("", TASK_QUEUE_NAME, MessageProperties.PERSISTENT_TEXT_PLAIN, message.getBytes());
      LOG.info(" [x] Sent '" + message + "'");
    } catch (IOException ex) {
      LOG.error(" Couldn't send message : '" + message + "' due to ", ex);
    }
  }

  /**
   *
   * @return @throws InterruptedException
   * @throws ConsumerCancelledException
   * @throws ShutdownSignalException
   * @throws IOException
   */
  public String receive() throws InterruptedException, ConsumerCancelledException, ShutdownSignalException, IOException {
    if (consumer == null) {
      consumer = new QueueingConsumer(channel);
      channel.basicConsume(TASK_QUEUE_NAME, false, consumer);
      LOG.info("Register this program as consumer of message queue");
    }
    channel.basicQos(1);

    QueueingConsumer.Delivery delivery = consumer.nextDelivery(10);
    if (delivery != null) {
      String message = new String(delivery.getBody());
      LOG.info(" [x] Received '" + message + "'");
      channel.basicAck(delivery.getEnvelope().getDeliveryTag(), false);
      return message;
    } else {
      return null;
    }
  }

  public void destroy() {
    try {
      channel.close();
      connection.close();
    } catch (IOException ex) {
      LOG.info("Session already destroy");
    }
  }
}
