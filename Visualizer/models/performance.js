// performance.js
// graph vis logic

var MongoClient = require('mongodb').MongoClient;
// Connection URL
var url = 'mongodb://localhost:27017/myproject';


// private constructor:

var Performance = module.exports = function Performance(_perf) {
    // all we'll really store is the node; the rest of our properties will be
    // derivable or just pass-through properties (see below).
    this._perf = _perf;
};

// public instance properties:

Object.defineProperty(Performance.prototype, 'values', {
    get: function () { return this._perf.data; }
});

Object.defineProperty(Performance.prototype, 'labels', {
    get: function () {
      var temp = this._perf.header.label.split(",");
      var labels = [];
      for(var i=1; i<temp.length; i+=2) {
        labels.push(temp[i]);
      }
      return labels;
    }
});

// static methods:
Performance.get = function (key, callback) {
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");
    var collection = db.collection(key+'-performance');
    collection.find({}).toArray(function(err, docs) {
      if(docs.length===0) {
        callback(null, null);
      } else {
        callback(null, new Performance(docs[0]));
      }
      db.close();
    });
  });
};
