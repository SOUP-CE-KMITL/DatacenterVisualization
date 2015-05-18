/**
 * Module dependencies.
 */

var express = require('express'),
  cookieParser = require('cookie-parser'),
  LocalStrategy = require('passport-local').Strategy,
  session = require('express-session'),
  moment = require('moment'),
  jwt = require('jwt-simple'),
  passport = require('passport'),
  flash = require('connect-flash'),
  path = require('path'),
  https = require('https');

var app = express();

app.configure(function() {
  // all environments
  app.set('port', process.env.PORT || 3000);
  app.use(express.favicon());
  app.set('views', __dirname + '/views');
  app.engine('ejs', require('ejs').renderFile);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());

  // required for passport
  app.use(express.session({
    secret: '1l0ve$c0tch$c0tchy$c0tch$c0tch'
  }));
  app.use(express.session({
    cookie: {
      maxAge: 60000
    }
  }));
  app.use(flash()); // use connect-flash for flash messages stored in session
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions

  // JWT
  app.set('jwtSecretToken', '1l0ve$c0tch$c0tchy$c0tch$c0tch');

  app.use(app.router);

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }
});

// Authentication
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === "guest" && password === "guest") {
      //if(username==="a" && password==="a") {
      var expires = moment().add(7, 'days').valueOf();
      var token = jwt.encode({
        iss: username,
        exp: expires
      }, app.get('jwtSecretToken'));
      return done(null, {
        token: token,
        expires: expires,
        username: "guest"
      });
    } else {
      return done(null, false, {
        message: 'Incorrect username or password.'
      });
    }
  }
));

var routes = require('./routes')(passport);

function passportAuthenticated(req, res, next) {
  // TODO delete the line below
  return next();
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function loginCheck(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/vis');
  }
  return next();
}

function jwtAuthenticated(req, res, next) {
  // TODO delete the line below
  return next();
  try {
    if (req.user.token) {
      // [TODO] May add token tracker (last activity)
      var decoded = jwt.decode(req.user.token, app.get('jwtSecretToken'));
      if (decoded.exp <= Date.now()) {
        res.end('Access token has expired', 400);
      }
      return next();
    }
  } catch (err) {
    console.error(err);
  }
  res.send(404);
}

// Routes
app.get('/', passportAuthenticated, routes.page.vis);
app.get('/login', loginCheck, routes.auth.login);
app.post('/login', routes.auth.authen);
app.get('/logout', routes.auth.logout);
app.get('/vis', passportAuthenticated, routes.page.vis);
app.get('/api/data/:centerId', jwtAuthenticated, routes.api.getData);
app.get('/api/nodes', jwtAuthenticated, routes.api.getAllNode);
app.get('/api/edges', jwtAuthenticated, routes.api.getAllEdge);
app.get('/api/nodes/root', jwtAuthenticated, routes.api.getRoot);
app.get('/api/nodes/:node_id', jwtAuthenticated, routes.api.getNode);
app.get('/api/nodes/:node_id/edges', jwtAuthenticated, routes.api.getEdge);
app.get('/api/nodes/:node_id/edges/:direction', jwtAuthenticated, routes.api.getEdge);
app.get('/api/performances/:id', jwtAuthenticated, routes.api.getPerformanceCounter);
app.get('/api/performances/:id/:counterId', jwtAuthenticated, routes.api.getPerformance);
app.get('/api/data', jwtAuthenticated, routes.api.getData);
app.get('/api/data/:node_id', jwtAuthenticated, routes.api.getData);

var fs = require('fs'),
  key = fs.readFileSync('./conf/ssl/key.pem'),
  cert = fs.readFileSync('./conf/ssl/cert.pem'),
  https_options = {
    key: key,
    cert: cert
  };

https.createServer(https_options, app).listen(app.get('port'), function() {
  console.log('Express server listening at: https://localhost:%d/', app.get('port'));
});
