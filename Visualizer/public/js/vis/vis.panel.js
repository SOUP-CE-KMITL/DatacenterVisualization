sigma.prototype.updateStatusPanel = function(node) {
  var root = node || this.getCenter();
  var sigma = this;
  var graph = this.graph;

  $("#visNodeName").attr("key", root.vis.key);
  // Name
  $("#visNodeName").html(root.label);

  if (sigma.getCenter().properties.key === root.properties.key) {
    var visPerf = $("#performanceChartArea");
    if (visPerf.attr("key") !== root.properties.key) {
      visPerf.attr("key", root.properties.key);
      visPerf.html("");
      //Detail
      $.ajax({
        url: "/api/performances/" + root.properties.key,
        xhrFields: {
          withCredentials: true
        },
        context: document.body,
        success: function(data) {
          // Performance
          var summaryData = [];
          var temp = {};
          try {
            for (var i in data.data._perf.data) {
              var counterId = i;
              var text = sigma.resolverPerformanceCounterId(counterId).summary;
              if (counterId == 2 || counterId == 24 || counterId == 125) {
                summaryData.push(counterId);
                temp[text] = true;
              }
            }
            for (var j in summaryData) {
              getPerf(root.properties.key, summaryData[j], sigma.resolverPerformanceCounterId(summaryData[j]).summary);
            }
          } catch (e) {
            console.log("no performance for " + root.properties.key);
          }
        }
      });
    }
  }


  var visDetail = $("#visNodeDetail");
  visDetail.html("<span style='color:#ccc'>no data</span>");
  var hosts, vms, vmsCountvar, hostsCount;
  if (root.properties.subType === "Datacenter") {
    var clusters = graph.children(root.id).filter(function(c) {
      if (c.properties.subType === "Cluster") return c;
    });
    hosts = graph.children(root.id).filter(function(c) {
      if (c.properties.subType === "HostSystem") return c;
    }).concat(clusters.map(function(c) {
      graph.children(c.id);
    }).filter(function(cc) {
      if (cc.properties.subType === "HostSystem") return cc;
    }));
    vms = hosts.map(function(h) {
      return graph.nodes(h.id + "/VMs");
    }).reduce(function(a, vm) {
      if (vm !== null && vm !== undefined && a.indexOf(vm.vis.subType) === -1) {
        return a.concat(graph.children(vm.id));
      } else {
        return a;
      }
    }, []);
    var nws = hosts.map(function(h) {
      return graph.nodes(h.id + "/Networks");
    }).reduce(function(a, nw) {
      if (nw !== null && nw !== undefined && a.indexOf(nw.vis.subType) === -1) {
        return a.concat(graph.children(nw.id));
      } else {
        return a;
      }
    }, []);
    var dss = hosts.map(function(h) {
      return graph.nodes(h.id + "/DSs");
    }).reduce(function(a, ds) {
      if (ds !== null && ds !== undefined && a.indexOf(ds.vis.subType) === -1) {
        return a.concat(graph.children(ds.id));
      } else {
        return a;
      }
    }, []);
    visDetail.html("<b>Host:</b> : " + hosts.length + "<br/>");
    visDetail.html(visDetail.html() + "<b>Virutal Machines</b> : " + vms.length + "<br/>");
    visDetail.html(visDetail.html() + "<b>Clusters</b> : " + clusters.length + "<br/>");
    visDetail.html(visDetail.html() + "<b>Networks</b> : " + nws.length + "<br/>");
    visDetail.html(visDetail.html() + "<b>Datastores</b> : " + dss.length + "<br/>");
  } else if (root.properties.subType === "Cluster") {
    hosts = graph.children(root.id).filter(function(cc) {
      if (cc.properties.subType === "Host") return cc;
    });
    visDetail.html("<b>Total Processors</b> : " + root.process + "cores" + "<br/>");
    visDetail.html(visDetail.html() + "<b>Total CPU resources</b> : " + root.cpu + "GHz" + "<br/>");
    visDetail.html(visDetail.html() + "<b>Total Memory</b> : " + root.mem + "GB" + "<br/>");
    visDetail.html(visDetail.html() + "<b>Hosts</b> : " + hosts.length + "<br/>");
  } else if (root.properties.subType === "HostSystem") {
    vms = graph.children(root.id).filter(function(c) {
      if (c.id === root.id + "/VMs") return c;
    }).reduce(function(a, vm) {
      return a.concat(graph.children(vm.id));
    }, []);
    try {
      vmsCount = vms.length;
    } catch (e) {
      vmsCount = 0;
    }
    var nics = graph.children(root.id).filter(function(c) {
      if (c.properties.subType === "virtual NIC" || c.vis.subType === "physical NIC") return c;
    }, []);
    var cpus = graph.children(root.id).filter(function(c) {
      if (c.properties.subType === "cpu") return c;
    }, []);
    visDetail.html("<b>Model</b> : " + "x86" + "<br/>");
    visDetail.html(visDetail.html() + "<b>Processor Type</b> : " + "Intel" + "<br/>");
    visDetail.html(visDetail.html() + "<b>Logical Processors</b> : " + cpus.length + " CPUs" + "<br/>");
    visDetail.html(visDetail.html() + "<b>NICs</b> : " + nics.length + "<br/>");
    visDetail.html(visDetail.html() + "<b>Virtual Machines</b> : " + vmsCount + "<br/>");
    visDetail.html(visDetail.html() + "<b>State</b> : " + "Connected" + "<br/>");
    // visDetail.html(visDetail.html() + "<b>Uptime</b> : " + root.uptime + "<br/>");
    visDetail.html(visDetail.html() + "<b>PowerState</b> : " + root.properties.state + "<br/>");
    visDetail.html(visDetail.html() + "<b>OverallStatus</b> : " + root.properties.overallStatus + "<br/>");
  } else if (root.properties.subType === "VirtualMachine") {
    var host = graph.adjacentNodes(root.id).map(function(adj) {
      return graph.adjacentNodes(adj.id).filter(function(n) {
        if (n.properties.subType === "HostSystem") {
          return n;
        }
      })[0];
    }).filter(function(n) {
      if (n !== null) {
        return n;
      }
    })[0];
    visDetail.html("");
    //visDetail.html("<b>Guest OS</b> : " + "CentOS" + "<br/>");
    visDetail.html(visDetail.html() + "<b>Compatibility</b> : " + "ESXi5.0" + "<br/>");
    //visDetail.html(visDetail.html() + "<b>IP Address</b> : " + root.vis.data.ip + "<br/>");
    visDetail.html(visDetail.html() + "<b>Host</b> : " + host.label + "<br/>");
  } else
  if (root.properties.type === "Network") {
    hosts = s.graph.children(root.id).filter(function(cc) {
      if (cc.cat === "Hosts") return cc;
    }).reduce(function(a, h) {
      return a.concat(graph.children(h.id));
    }, []);
    vms = s.graph.children(root.id).filter(function(cc) {
      if (cc.cat === "VMs") return cc;
    }).reduce(function(a, vm) {
      return a.concat(graph.children(vm.id));
    }, []);
    try {
      vmsCount = vms.length;
    } catch (e) {
      vmsCount = 0;
    }
    try {
      hostsCount = hosts.length;
    } catch (e) {
      hostsCount = 0;
    }
    //visDetail.html("<b>Hosts</b> : " + hostsCount + "<br/>");
    //visDetail.html(visDetail.html() + "<b>Virtual machines</b> : " + vmsCount + "<br/>");
  }

  // Status
  var visStatus = $("#visNodeStatus");
  if (["Host", "Datacenter", "VM", "Cluster"].some(function(e) {
      return e === root.cat;
    })) {
    var progressBar = function(label, percent, limit) {
      var type = "success";
      if (percent >= limit - 10) type = "danger";
      else if (percent >= limit - 30) type = "warning";
      return "<div  class=\"col-md-4\">" + label + "</div><div  class=\"progress col-md-8\" style=\"padding-left:0px;padding-right:0px;\"><div class=\"progress-bar progress-bar-" + type + "\" style=\"width: " + percent + "%\"></div></div>";
    };
    visStatus.html(progressBar("CPU", root.cupUsage, 80));
    visStatus.html(visStatus.html() + progressBar("RAM", root.ramUsage, 100));
    visStatus.html(visStatus.html() + progressBar("Storage", root.storageUsage, 80));
  } else {
    visStatus.html("<span style='color:#ccc'>no data</span>");
  }
};

function getPerf(key, counterId, summaryText) {
  var visPerf = $("#performanceChartArea");
  var partA = "<div class='col-md-4'><div class='box box-solid' style='min-height:200px'><div class='box-header'><h3 class='box-title text-blue'>";
  var partB = "</h3><div class='box-tools pull-right'></div></div><!-- /.box-header --><div class='box-body text-center'><div class='sparkline' data-type='line' data-spot-Radius='3' data-highlight-Spot-Color='#f39c12' data-highlight-Line-Color='#222' data-min-Spot-Color='#f56954' data-max-Spot-Color='#00a65a' data-spot-Color='#39CCCC' data-offset='90' data-width='100%' data-height='100px' data-line-Width='2' data-line-Color='#39CCCC' data-fill-Color='rgba(57, 204, 204, 0.08)'>";
  var partC = "</div></div></div></div>";
  $.ajax({
    url: "/api/performances/" + key + "/" + counterId,
    xhrFields: {
      withCredentials: true
    },
    context: document.body,
    success: function(data) {
      var newDiv = $(partA + summaryText + partB + data.data.values + partC);
      var graph = newDiv.children().children().last().children();
      visPerf.append(newDiv);
      newDiv.children().children().last().children().sparkline('html', newDiv.children().children().last().children().data());
    }
  });
}

sigma.prototype.updateBreadcrumb = function() {
  var center = this.getCenter();
  // Breradcrumb
  var path;
  $('#breadcrumb').html("");
  if(center.properties.subType==="network") {
    path = [center].concat(s.graph.nodes("7"));
  } else {
    path = s.getPathToRoot(center, true);
  }
  for (var i = 0; i < path.length; i++) {
    var linkName = (path[i].label.length < 15 ? path[i].label : path[i].label.split(0, 14) + "...");
    var linkHTML = "<a style=\"cursor:pointer;color:#1abc9c\" class=\"nodeLink\" onclick=\"s.dispatchEvent('clickNode', {node:s.graph.nodes('" + path[i].id + "')})\">" + linkName + "</a>";
    if (i === 0) $('#breadcrumb').html($('#breadcrumb').html() + "<li class='title'>" + linkHTML + "</li>");
    else $('#breadcrumb').html($('#breadcrumb').html() + " <li>" + linkHTML + "</li>");
  }
  $('#breadcrumb').html($('#breadcrumb').html() + "<li class=\"active\"><a href=\"#\"></a></li>");
};
