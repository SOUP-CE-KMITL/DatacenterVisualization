var initSigma =  function(containerId, rootId, nodes, edges) {

	var s = new sigma({
		renderer: {
			container: document.getElementById(containerId),
			type: 'canvas'
		},settings: {
			defaultEdgeColor: "#eee",
			nodesPowRatio: 0.5,
			edgesPowRatio: 0.5,
			animationsTime: 1000,
			autoRescale: false,
			maxNodeSize: 23,
			defaultLabelSize: 12,
			zoomingRatio: 1.7,
			zoomMin: 0.0312,
			zoomMax: 4
		}
	});
	initData(s, nodes, edges);
	initRoot(s, rootId);
	return s;

	function initData(s, nodes, edges) {
		var graph = s.graph;
		nodes.forEach(function(node) {
			graph.addNode(node);
		});
		edges.forEach(function(edge) {
			graph.addEdge(edge);
		});
		graph.nodes().forEach( function(n){
			var parent = graph.parent(n.id);
			//[TODO] data clean
			if(n.cat==="Datacenter") {
				graph.addEdge({id:n.key+"-"+parent[0].key, source:n.id, target: parent[0].id});
			} else if(n.cat==="Host") {
				parent.forEach(function(node){
					graph.addEdge({id:n.key+"-"+node.key, source:n.id, target:node.id});
				});
			} else if(n.cat==="Host") {
				parent.forEach(function(node){
					graph.addEdge({id:n.key+"-"+node.key, source:n.id, target:node.id});
				});
			} else if(n.cat==="VM") {
				parent.forEach(function(node){
					graph.addEdge({id:n.key+"-"+node.key, source:n.id, target:node.id});
				});
			} else if(n.cat==="Network") {
				parent.forEach(function(node){
					graph.addEdge({id:n.key+"-"+node.key, source:n.id, target:node.id});
				});
			}
		});
		graph.nodes().forEach( function(n){
			var children = graph.children(n.id);
			//[TODO] grouping
			var vms, vmsEdges;
			if(n.cat==="Host") {
				// group host's vms
				vms = children.filter(function(n){if(n.cat==="VM")return n;});
				if(vms.length>0) {
					graph.addNode({id: (n.id+"/VMs"), dummy:true, label: ("VMs (" + vms.length + ")"), key: (n.key+"/VMs"), cat: "VMs"});
					graph.addEdge({id:(n.id+"-"+n.id+"/VMs"), source:(n.id), target: (n.id+"/VMs")});
					//graph.addEdge({id:(n.id+"/VMs-"+n.id), source:(n.id+"/VMs"), target:(n.id)});
					vmsEdges = vms.reduce(function(a, vm){return a.concat(graph.edgeBetween(n.id, vm.id));},[]);
					vmsEdges.forEach(function(e){
						graph.dropEdge(e.id);
					});
					vms.forEach(function(vm){
						graph.addEdge({id:(n.id+"/VMs-"+vm.id), source:(n.id+"/VMs"), target:(vm.id)});
						graph.addEdge({id:(vm.id+"-"+n.id), source:(vm.id), target:(n.id)});
					});
				}
				// group host's network
				var nws = children.filter(function(n){if(n.cat==="Network")return n;});
				if(nws.length>0) {
					graph.addNode({id: (n.id+"/Networks"), dummy:true, label: ("Networks (" + nws.length + ")"), key: (n.key+"/Networks"), cat: "Networks"});
					graph.addEdge({id:(n.id+"-"+n.id+"/Networks"), source:(n.id), target: (n.id+"/Networks")});
					//graph.addEdge({id:(n.id+"/Networks-"+n.id), source:(n.id+"/Networks"), target:(n.id)});
					var nwsEdges = nws.reduce(function(a, nw){return a.concat(graph.edgeBetween(n.id, nw.id));},[]);
					nwsEdges.forEach(function(e){
						graph.dropEdge(e.id);
					});
					nws.forEach(function(nw){
						graph.addEdge({id:(n.id+"/Networks-"+nw.id), source:(n.id+"/Networks"), target:(nw.id)});
						graph.addEdge({id:(nw.id+"-"+n.id), source:(nw.id), target:(n.id)});
					});
				}
			} else if(n.cat==="Network") {
				// group network's vms
				vms = children.filter(function(n){if(n.cat==="VM")return n;});
				if(vms.length>0) {
					graph.addNode({id: (n.id+"/VMs"), dummy:true, label: ("VMs (" + vms.length + ")"), key: (n.key+"/VMs"), cat: "VMs"});
					graph.addEdge({id:(n.id+"-"+n.id+"/VMs"), source:(n.id), target: (n.id+"/VMs")});
					//graph.addEdge({id:(n.id+"/VMs-"+n.id), source:(n.id+"/VMs"), target:(n.id)});
					vmsEdges = vms.reduce(function(a, vm){return a.concat(graph.edgeBetween(n.id, vm.id));},[]);
					vmsEdges.forEach(function(e){
						graph.dropEdge(e.id);
					});
					vms.forEach(function(vm){
						graph.addEdge({id:(n.id+"/VMs-"+vm.id), source:(n.id+"/VMs"), target:(vm.id)});
						graph.addEdge({id:(vm.id+"-"+n.id), source:(vm.id), target:(n.id)});
					});
				}
				// group network's hosts
				var hs = children.filter(function(n){if(n.cat==="Host")return n;});
				if(hs.length>0) {
					graph.addNode({id: (n.id+"/Hosts"), dummy:true, label: ("Hosts (" + hs.length + ")"), key: (n.key+"/Hosts"), cat: "Hosts"});
					graph.addEdge({id:(n.id+"-"+n.id+"/Hosts"), source:(n.id), target: (n.id+"/Hosts")});
					//graph.addEdge({id:(n.id+"/Hosts-"+n.id), source:(n.id+"/Hosts"), target:(n.id)});
					var hsEdges = hs.reduce(function(a, h){return a.concat(graph.edgeBetween(n.id, h.id));},[]);
					hsEdges.forEach(function(e){
						graph.dropEdge(e.id);
					});
					hs.forEach(function(h){
						graph.addEdge({id:(n.id+"/Hosts-"+h.id), source:(n.id+"/Hosts"), target:(h.id)});
					});
				}
			}
		});
	}

	function initRoot (s, rootId) {
		s.root = s.graph.nodeByKey(rootId);
	}
};

sigma.classes.graph.attach('addNode', 'addVisAttribute', function(nodeData) {
	var node = this.nodes(nodeData.id);
	var shapeIcon = {
		"ROOT" : "./img/ROOT.png",
		"Datacenter" : "./img/Datacenter.png",
		"Cluster" : "./img/Cluster.png",
		"HostSystem" : "./img/Host.png",
		"Hosts" : "./img/Host.png",
		"VirtualMachine" : "./img/VM.png",
		"VMs" : "./img/VM.png",
		"Network" : "./img/Network.png",
		"Networks" : "./img/Network.png",
		"Storage" : "./img/Storage.png",
		"Folder" : "./img/Folder.png"
	};

	node.label = node.label || "No name";
	node.type = "vis";
	node.hidden = false;
	node.new_x = node.old_x = node.x = 0;
	node.new_y = node.old_y = node.y = 0;
	node.new_size = node.old_size = node.size = 1;
	node.new_color = node.old_color = node.color = "#fff";

	node.borderWidth = node.borderWidth || 3;
	node.image = { url: shapeIcon[node.cat] };
	node.extra = node.extra || {};
	node.extra.pos = node.extra.pos || { theta : 0, rho : 0 };
	node.extra.angleSpan = node.extra.angleSpan || { begin : 0, end : 0 };
	node.extra.dim = node.extra.dim || 3;

	// [TODO]
	if(! node.dummy) {
		if(["network-11","vm-26","vm-25","host-30"].some(function(e){return e===node.key;})) {
			if(["ROOT","Datacenter","Cluster","Folder"].some(function(e){return e===node.cat;})) node.overallStatus = "none"; else node.overallStatus = "yellow";
			if(["VM","Host"].some(function(e){return e===node.cat;})) node.powerState  = "on";
		} else {
			if(["ROOT","Datacenter","Cluster","Folder"].some(function(e){return e===node.cat;})) node.overallStatus = "none"; else node.overallStatus = "green";
			if(["VM","Host"].some(function(e){return e===node.cat;})) node.powerState  = "start";
		}
	}
	if(node.label==="network-11") node.label = "VM Network";
	node.ip = (parseInt(Math.random()*255, 10) + "." + parseInt(Math.random()*255, 10) + "." + parseInt(Math.random()*255, 10) + "." + parseInt(Math.random()*255, 10));
	node.nic = parseInt(Math.random()*5, 10) + 1;
	node.core = (20 + parseInt(Math.random()*4, 10));
	node.uptime = (parseInt(Math.random()*24, 10) + ":" + parseInt(Math.random()*60, 10));
	node.cpu = parseInt(Math.random()*256, 10);
	node.process = parseInt(Math.random()*20, 10);
	node.mem = parseInt(Math.random()*2048, 10);
	node.cupUsage = parseInt(Math.random()*60, 10);
	if(node.key==="host-30")  node.ramUsage = 99;
	else node.ramUsage = parseInt(Math.random()*60, 10);
	node.storageUsage = parseInt(Math.random()*60, 10);
});

var getKeys = function(obj){
	var keys = [];
	for(var key in obj){
		keys.push(key);
	}
	return keys;
};

sigma.classes.graph.addMethod('edgeTo', function(nodeId) {
	return this.edgesArray.filter(function(e){if(e.target===nodeId)return e;});
});

sigma.classes.graph.addMethod('edgeFrom', function(nodeId) {
	return this.edgesArray.filter(function(e){if(e.source===nodeId)return e;});
});

sigma.classes.graph.addMethod('edgeBetween', function(nodeId1, nodeId2) {
	return this.edgesArray.filter(function(e){if((e.source===nodeId1 && e.target===nodeId2) || (e.source===nodeId2 && e.target===nodeId1)) return e;});
});

sigma.classes.graph.addMethod('children', function(nodeId) {
	var nodesIndex = this.nodesIndex;
	return getKeys(this.outNeighborsIndex[nodeId]).map(function(nid){return nodesIndex[nid];});
});

sigma.classes.graph.addMethod('parent', function(nodeId) {
	var nodesIndex = this.nodesIndex;
	return getKeys(this.inNeighborsIndex[nodeId]).map(function(nid){return nodesIndex[nid];});
});

sigma.classes.graph.addMethod('nodeByKey', function(nodeKey) {
	return this.nodesArray.filter(function(n){if(n.key===nodeKey)return n;})[0];
});

sigma.prototype.getNodeByName =  function(name) {
	return this.graph.nodes().filter(function(n){if(n.label===name)return n;});
};

sigma.prototype.reposition =  function(currentNodeKey, callback) {
	currentNodeKey = currentNodeKey || "ROOT";
	//set root -> gabage collector -> depthCal -> filter -> group -> layout -> resize -> update
	var current = this.graph.nodes().filter(function(n){return n.key===currentNodeKey;})[0];
	this.setCenter(current);
	this.computeDepth(0);
	this.computeLayout();
	this.filter();
	this.applyLayout();
	this.applyEdgeStyle();
	this.resize();
	this.updateStatusPanel();
	this.updateBreadcrumb();
	var step = 0;
	var prefix = ['old_', 'new_'][step = +!step];
	sigma.plugins.animate(
		s,
		{
			x: prefix + 'x',
			y: prefix + 'y',
			size: prefix + 'size',
			color: prefix + 'color'
		},
		{
			onComplete: function() {
				if(callback!==null) {
					s.camera.goTo({x: s.getCenter().x, y: s.getCenter().y, ratio: s.camera.ratio});
					s.refresh();
				}	else {
					callback();
				}
			}
		}
	);
};

sigma.prototype.getRoot = function() {
	return this.root;
};

sigma.prototype.getCenter = function() {
	return this.current;
};

sigma.prototype.setCenter = function(_current) {
	this.current = _current;
};

sigma.prototype.getPathToRoot = function(startNode, clear) {
	var root = this.getRoot();
	var graph = this.graph;
	var nodes = graph.nodes();
	var that = this;
	if(clear) nodes.forEach(function (elem) {elem.extra.flag = false;});
	if(startNode.key===root.key) {
		return [startNode];
	} else {
		var adjs = graph.adjacentNodes(startNode.id);
		for(var i=0;i<adjs.length;i++){
			var adj = adjs[i];
			if(adj.extra.flag===false) {
				if(adj.extra.depth>startNode.extra.depth) {
					var path = that.getPathToRoot(adj, false);
					if(path!==null) return [startNode].concat(path);
				}
			}
			adj.extra.flag = true;
		}
	}
	return [];
};
