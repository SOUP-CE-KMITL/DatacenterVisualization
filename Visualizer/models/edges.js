// edges.js
// graph vis logic

var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase(
  process.env.NEO4J_URL ||
  process.env.GRAPHENEDB_URL ||
  'http://localhost:7474'
);

// private constructor:

var Edge = module.exports = function Edge(_edge) {
  this.id = String(_edge._data.metadata.id);
  var startURL = _edge._data.start.split("/");
  this.source = String(startURL[startURL.length - 1]);
  var endURL = _edge._data.end.split("/");
  this.target = String(endURL[endURL.length - 1]);
  this.type = _edge._data.metadata.type;
};


// static methods:

Edge.getEdge = function(node_id, direction, callback) {
  var query = [
    'MATCH (n1)-[r]->(n2)',
  ];

  if (direction === 'in') {
    query = query.concat(
      ['WHERE id(n2)=' + node_id,
        'RETURN r'
      ]);
  } else if (direction === 'out') {
    query = query.concat(
      ['WHERE id(n1)=' + node_id,
        'RETURN r'
      ]);
  } else {
    query = query.concat(
      ['WHERE id(n1)=' + node_id,
        'OR id(n2)=' + node_id,
        'RETURN r'
      ]);
  }

  query = query.join('\n');

  db.query(query, null, function(err, results) {
    if (err) return callback(err);
    var edges = results.map(function(result) {
      return new Edge(result.r);
    });
    callback(null, edges);
  });
};

Edge.getAllEdge = function(node_id, direction, callback) {
  var query = [
    'MATCH (n1)-[r]->(n2)',
    'RETURN r'
  ];

  query = query.join('\n');

  db.query(query, null, function(err, results) {
    if (err) return callback(err);
    var edges = results.map(function(result) {
      return new Edge(result.r);
    });
    callback(null, edges);
  });
};
