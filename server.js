var express = require('express'),
  app = express(),



  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  //Task = require('./api/models/todoListModel'), //created model loading here
  User = require('./api/models/userModel'), //created user loading here
  Country = require('./api/models/countryModel'),
  City = require('./api/models/cityModel'),
  Community = require('./api/models/communityModel'),
  Carport = require('./api/models/carportModel'),
  LeisurePark = require('./api/models/leisureParkModel'),
  Role = require('./api/models/roleModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/parking');
 
//The bodyParser object exposes various factories to create middlewares. All middlewares 
//will populate the req.body property with the parsed body when the Content-Type request header matches 
//the type option, or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.

//temp solution, I don't how to set requet content-type to application/json, so here I use {type:'text/plain'} to match
//the client request type, so I can get req.body here.

//app.use(bodyParser.json());
//app.use(bodyParser.json({type:'text/plain'}));
//app.use(bodyParser.urlencoded({ extended: false }));

 
app.use(function (req, res, next) {

  //req.header("Content-Type", "application/json"); 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
 
  next();
});
 
 
var users = require('./api/routes/userRoutes');
var maps = require('./api/routes/mapRoutes');
var country = require('./api/routes/countryRoutes');
var city = require('./api/routes/cityRoutes');
var community = require('./api/routes/communityRoutes');
var carport = require('./api/routes/carportRoutes');
var leisurePark = require('./api/routes/leisureParkRoutes');
var role = require('./api/routes/roleRoutes');
var sms = require('./api/routes/smsRoutes'); 

users(app);
maps(app);
country(app);
city(app);
community(app);
carport(app);
leisurePark(app);
role(app);
sms(app);
 
app.listen(port); 
app.use(bodyParser.json());

console.log('Community RESTful API server started on: ' + port);
 
app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
