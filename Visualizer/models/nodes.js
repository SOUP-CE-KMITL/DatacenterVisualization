// nodes.js
// graph vis logic

var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase(
  process.env.NEO4J_URL ||
  process.env.GRAPHENEDB_URL ||
  'http://localhost:7474'
);

// private constructor:

var Node = module.exports = function Node(_node) {
  this.id = String(_node.id);
  // this.properties = _node._data.data;
  this.properties = clone(_node._data.data);
  this.properties.label = _node.data.name;
  this.properties.key = _node._data.data.key;
  this.properties.type = _node._data.metadata.labels[0];
  this.properties.subType = _node.data.type;
};

function clone(obj) {
    if (null === obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

// primitive methods

getNodeByQuery = function(query, callback) {
  db.query(query, null, function(err, results) {
    if (err) return callback(err);
    var nodes = results.map(function(result) {
      return new Node(result.n);
    });
    nodes = [].concat(nodes);
    callback(null, nodes);
  });
};

var Edge = function Edge(_edge) {
  this.id = String(_edge._data.metadata.id);
  var startURL = _edge._data.start.split("/");
  this.source = String(startURL[startURL.length - 1]);
  var endURL = _edge._data.end.split("/");
  this.target = String(endURL[endURL.length - 1]);
  this.type = _edge._data.metadata.type;
};

getDataByQuery = function(query, callback) {
  db.query(query, null, function(err, results) {
    if (err) return callback(err);
    var nodes = results.map(function(result) {
      return new Node(result.node);
    });
    nodes = [].concat(nodes);

    var edges = results.reduce(function(result, currentArray) {
      var currentResult = [];
      var relations = currentArray.relations;
      for (var i in relations) {
        currentResult.push(new Edge(relations[i]));
      }
      return result.concat(currentResult);
    }, []);
    edges = [].concat(edges);
    try {
      callback(null, {
        nodes: nodes,
        edges: edges,
      });
    } catch (e) {
      console.log(e);
    }
  });
};

// operation method

Node.getNode = function(node_id, callback) {
  var query = [
    'MATCH (n)',
    'WHERE id(n)=' + node_id,
    'RETURN n',
  ].join('\n');
  getNodeByQuery(query, callback);
};

Node.getNodeByKey = function(node_key, callback) {
  var query = [
    'MATCH (n)',
    'WHERE n.key="' + node_key + '"',
    'RETURN n',
  ].join('\n');
  getNodeByQuery(query, callback);
};

Node.getAllNode = function(callback) {
  var query = [
    'MATCH (n)',
    'RETURN n',
  ].join('\n');
  getNodeByQuery(query, callback);
};

Node.getData = function(node_id, callback) {
  this.getNode(node_id, function(err, data) {
    if (data[0].properties.key === "group-d1") {
      getRootData(node_id, callback);
    } else if (data[0].properties.subType === "network") {
      callback(err, "network data");
    } else if (data[0].properties.subType === "HostSystem") {
      callback(err, "HostSystem data");
    } else if (data[0].properties.subType === "VirtualMachine") {
      callback(err, "VirtualMachine data");
    } else {
      callback(err, "other data");
    }
  });
};

// node spicific data function

getRootData = function(node_id, callback) {
  var query = [
    'MATCH (root{key:"group-d1"})',
    'RETURN root AS node, [] AS relations',
    'UNION',
    'MATCH (root{key:"group-d1"})-[rel]->(dc{type:"Datacenter"})',
    'RETURN dc AS node, COLLECT(DISTINCT(rel)) AS relations',
    'UNION',
    'MATCH (root{key:"group-d1"})-->(dc{type:"Datacenter"})-[rel]->(cluster{type:"Cluster"})',
    'RETURN cluster AS node, COLLECT(DISTINCT(rel)) AS relations',
    'UNION',
    'MATCH (root{key:"group-d1"})-->(dc{type:"Datacenter"})-[rel]->(hostDC{type:"HostSystem"})',
    'RETURN hostDC AS node, COLLECT(DISTINCT(rel)) AS relations',
    'UNION',
    'MATCH (root{key:"group-d1"})-->(dc{type:"Datacenter"})-->(cluster{type:"Cluster"})-[rel]->(hostC{type:"HostSystem"})',
    'RETURN hostC AS node, COLLECT(DISTINCT(rel)) AS relations',
  ].join('\n');
  getDataByQuery(query, callback);
};
