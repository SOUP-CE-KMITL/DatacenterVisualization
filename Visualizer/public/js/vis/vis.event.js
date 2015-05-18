var initEvent = function(s) {
  //Event binding
  s.bind(' clickNode', function(e) {
    if (e.data.node.dummy === true) {
      if (s.getCenter().properties.key === s.getRoot().properties.key) {
        var parents = s.graph.parent(e.data.node.id);
        s.reposition(parents[0].properties.key);
      }

      var children = s.graph.children(e.data.node.id);
      children.forEach(function(n) {
        n.hidden = !n.hidden;
      });
    } else {
      s.reposition(e.data.node.properties.key, e.data.callback);
    }
    s.refresh();
    $("#warnningDetail").html("");
  });

  s.bind('overNode', function(e) {
    s.updateStatusPanel(e.data.node);
    var adjs = s.graph.adjacentEdges(e.data.node.id);
    adjs.forEach(function(e) {
      e.color = "#000";
    });
    s.refresh();
  });

  s.bind('outNode', function(e) {
    s.updateStatusPanel();
    s.applyEdgeStyle();
    s.refresh();
  });

  s.bind('doubleClickNode rightClickNode', function(e) {
    //console.log(e.type, e.data.node.label, e.data.captor);
  });

  s.bind('overEdge outEdge clickEdge doubleClickEdge rightClickEdge', function(e) {
    //console.log(e.type, e.data.edge, e.data.captor);
  });

  s.bind('doubleClickStage rightClickStage', function(e) {
    //console.log(e.type, e.data.captor);
  });

  $("#search").on("focus", function() {
    $("#warnningDetail").html("");
    s.reposition(s.getCenter().properties.key, false);
    s.graph.nodes().forEach(function(node) {
      node.old_size = node.size;
      node.size = node.new_size = s.settings("maxNodeSize") / 10;
      node.hidden = !1;
    });
    s.camera.goTo({
      x: s.camera.x,
      y: s.camera.y,
      ratio: 4
    });
    s.refresh();
  });

  $("#search").on("blur", function() {
    // Wait for sigma 3 sec cause click node event may be fired
    setTimeout(function() {
      $("#search").val("");
      $("#searchCounter").html("");
    }, 300);

    setTimeout(function() {
      s.camera.ratio = 1;
      s.reposition(s.getCenter().properties.key);
    }, 320);
  });

  $("#search").on("keyup", function() {
    var count = 0;
    s.graph.nodes().forEach(function(node) {
      if ($("#search").val() !== "" && !node.dummy && node.label.toLowerCase().match($("#search").val().toLowerCase()) !== null) {
        count++;
        node.old_size = node.size;
        node.new_size = s.settings("maxNodeSize");
      } else {
        node.old_size = node.size;
        node.new_size = s.settings("maxNodeSize") / 15;
      }
    });
    $("#searchCounter").html("Found " + count + " nodes");
    var step = 0;
    var prefix = ['old_', 'new_'][step = +!step];
    sigma.plugins.animate(
      s, {
        x: prefix + 'x',
        y: prefix + 'y',
        size: prefix + 'size',
        color: prefix + 'color'
      }, {
        onComplete: function() {
          s.camera.goTo({
            x: s.getRoot().x,
            y: s.getRoot().y,
            ratio: 4
          });
          s.refresh();
        }
      }
    );
  });
};
