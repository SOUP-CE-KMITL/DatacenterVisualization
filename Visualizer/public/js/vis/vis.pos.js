var initVis = function(s) {
  if ("undefined" == typeof sigma) throw "sigma is not declared";

  function CircularLayout(s) {
    var root = null;
    var settings = s.settings;
    var graph = s.graph;
    var nodes = graph.nodes();
    var edges = graph.edges();

    this.clearFlag = function() {
      nodes.forEach(function(elem) {
        elem.vis.extra.flag = false;
      });
    };

    this.init = function() {
      root = s.getCenter();
      nodes.forEach(function(node) {
        node.vis = node.vis || {};
        node.vis.extra = {};
        node.vis.extra.angleSpan = {
          begin: 0,
          end: 0
        };
        node.vis.extra.depth = 0;
        node.vis.extra.dim = 3;
        node.vis.extra.pos = {
          theta: 0,
          rho: 0
        };
        node.vis.extra.treeAngularWidth = null;
      });
      if (root === null) throw "ROOT not found";
    };

    this.computeAngularWidths = function() {
      this.setAngularWidthForNodes(root);
      this.setSubtreesAngularWidth();
    };

    this.eachBFS = function(startNode, action) {
      this.clearFlag();
      var queue = [startNode];
      while (queue.length !== 0) {
        var node = queue.pop();
        action(node, node.vis.extra.depth);
        //var adjs = graph.adjacentNodes(node.id);
        var adjs = graph.children(node.id);
        for (var i = 0; i < adjs.length; i++) {
          var adj = adjs[i];
          if (adj.vis.extra.flag === false) {
            adj.vis.extra.flag = true;
            queue.unshift(adj);
          }
        }
      }
    };

    this.setAngularWidthForNodes = function() {
      this.eachBFS(root, function(elem, i) {
        var diamValue = elem.vis.extra.angularWidth || 5;
        elem.vis.extra.angularWidth = diamValue / i;
      });
    };

    this.setSubtreesAngularWidth = function() {
      for (var i = 0; i < nodes.length; i++) {
        this.setSubtreeAngularWidth(nodes[i]);
      }
    };

    this.setSubtreeAngularWidth = function(elem) {
      var that = this;
      var nodeAW = elem.vis.extra.angularWidth;
      var sumAW = 0;
      this.eachSubnode(elem, function(child) {
        that.setSubtreeAngularWidth(child);
        sumAW += child.vis.extra.treeAngularWidth;
      });
      elem.vis.extra.treeAngularWidth = Math.max(nodeAW, sumAW);
    };

    this.eachSubnode = function(node, action) {
      this.eachLevel(node, 1, 1, action);
    };

    this.eachLevel = function(node, levelBegin, levelEnd, action) {
      var d = node.vis.extra.depth,
        that = this;
      levelEnd = (levelEnd === false ? Number.MAX_VALUE - d : levelEnd);
      (function loopLevel(node, levelBegin, levelEnd) {
        var d = node.vis.extra.depth;
        if (d >= levelBegin && d <= levelEnd) {
          action(node, d);
        }
        if (d < levelEnd) {
          //var adjs = graph.adjacentNodes(node.id);
          var adjs = graph.children(node.id);
          for (var i = 0; i < adjs.length; i++) {
            var adj = adjs[i];
            if (adj.vis.extra.depth > d)
              loopLevel(adj, levelBegin, levelEnd);
          }
        }
      })(node, levelBegin + d, levelEnd + d);
    };

    this.computePositions = function(getLength) {
      var that = this;
      root.vis.extra.angleSpan = {
        begin: 0,
        end: 2 * Math.PI
      };

      this.eachBFS(root, function(elem) {
        var angleSpan = elem.vis.extra.angleSpan.end - elem.vis.extra.angleSpan.begin;
        var angleInit = elem.vis.extra.angleSpan.begin;
        var len = getLength(elem);
        //Calculate the sum of all angular widths
        var totalAngularWidths = 0,
          subnodes = [],
          maxDim = {};
        that.eachSubnode(elem, function(sib) {
          // [TODO] Grouping and add dummy here
          totalAngularWidths += sib.vis.extra.treeAngularWidth;
          //get max dim
          var dim = sib.vis.extra.dim;
          maxDim = 3;
          subnodes.push(sib);
        });
        //Maintain children order
        //Second constraint for <http://bailando.sims.berkeley.edu/papers/infovis01.htm>
        if (parent && parent.id == elem.id && subnodes.length > 0 && subnodes[0].dist) {
          subnodes.sort(function(a, b) {
            return (a.dist >= b.dist) - (a.dist <= b.dist);
          });
        }

        // [TODO] Subnode position calculate here
        subnodes.sort(function compare(l, r) {
          (l.vis.subType > r.vis.subType) ? 1: (l.vis.subType == r.vis.subType) ? 0 : (l.overallStatus > r.overallStatus) ? 1 : (l.overallStatus == r.overallStatus) ? (l.label > r.label) ? 1 : (l.label == r.label) ? 0 : -1 : -1
        });

        //Calculate nodes positions.
        for (var k = 0, ls = subnodes.length; k < ls; k++) {
          var child = subnodes[k];
          if (!child._flag) {
            var angleProportion = child.vis.extra.treeAngularWidth / totalAngularWidths * angleSpan;
            var theta = angleInit + angleProportion / 2;

            child.vis.extra.pos.theta = theta;
            child.vis.extra.pos.rho = len;
            child.vis.extra.span = angleProportion;
            child.vis.extra.dim_quotient = child.vis.extra.dim / maxDim;

            child.vis.extra.angleSpan = {
              begin: angleInit,
              end: angleInit + angleProportion
            };
            angleInit += angleProportion;
          }
        }
      });
    };

    this.toComplex = function(polar) {
      var x = Math.cos(polar.theta) * polar.rho;
      var y = Math.sin(polar.theta) * polar.rho;
      return {
        'x': x,
        'y': y
      };
    };

    this.setPos = function(maxNodeSize) {
      var that = this;
      graph.nodes().forEach(function(node) {
        var pos = that.toComplex(node.vis.extra.pos);
        node.old_x = node.x;
        node.old_y = node.y;
        node.new_x = pos.x;
        node.new_y = pos.y;
      });
    };

    this.computeDepth = function(startDepth) {
      var center = s.getCenter();
      startDepth = startDepth || 0;
      nodes.forEach(function(node) {
        node.vis.extra.depth = -1;
      });
      center.vis.extra = center.vis.extra || {};
      center.vis.extra.depth = startDepth;
      var queue = [center];
      while (queue.length !== 0) {
        var node = queue.pop();
        //var adjs = graph.adjacentNodes(node.id);
        var adjs = graph.children(node.id);
        for (var i = 0; i < adjs.length; i++) {
          var adj = adjs[i];
          if (adj.vis.extra.depth === -1) {
            adj.vis.extra = adj.vis.extra || {};
            adj.vis.extra.depth = startDepth + node.vis.extra.depth + 1;
            queue.unshift(adj);
          }
        }
      }
    };

    this.compute = function() {
      this.init();
      this.computeDepth();
      this.computeAngularWidths();
    };
  }

  sigma.prototype.computeLayout = function() {
    // [TODO] make circular layout as plugin pass it as layout class
    if (!this.circularLayout)
      this.circularLayout = new CircularLayout(this);
    this.circularLayout.compute();
  };

  sigma.prototype.applyLayout = function() {
    if (!this.circularLayout)
      this.circularLayout = new CircularLayout(this);
    // [TODO] make circular layout as plugin pass it as layout class
    var center = this.getCenter();

    var ld =
      (center.vis.subType === "Folder") ? 120 :
      (center.vis.subType === "Datacenter") ? 200 :
      (center.vis.subType === "Cluster") ? 300 :
      (center.vis.subType === "Host") ? 200 :
      (center.vis.subType === "Hosts") ? 300 :
      (center.vis.subType === "VM") ? 300 :
      (center.vis.subType === "VMs") ? 300 :
      (center.vis.subType === "Network") ? 400 :
      (center.vis.subType === "Networks") ? 300 :
      (center.vis.subType === "Storage") ? 300 :
      (center.vis.subType === "Folder") ? 300 : 300;
    var lengthFunc = function(elem) {
      return (elem.vis.extra.depth + 1) * ld;
    };

    this.circularLayout.computePositions(lengthFunc);
    this.circularLayout.setPos(this.settings("maxNodeSize"));
  };
};
