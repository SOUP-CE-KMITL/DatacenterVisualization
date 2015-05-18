function initNodes(callback) {
  $.ajax({
    url: "/api/nodes",
    xhrFields: {
      withCredentials: true
    },
    context: document.body,
    success: function(data) {
      console.log("node data received");
      callback(null, data);
    }
  });
}

function initEdges(callback) {
  $.ajax({
    url: "/api/edges",
    xhrFields: {
      withCredentials: true
    },
    context: document.body,
    success: function(data) {
      console.log("edge data received");
      callback(null, data);
    }
  });
}
