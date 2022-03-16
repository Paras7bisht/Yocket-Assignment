var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = require('./routes/eventRoutes')

app.use(bodyParser.json())

//Mongoose objects
Event = require('./models/event');

//DB Connect
mongoose.connect('mongodb://localhost/event')
var db = mongoose.connnection;

app.use('/',router)
app.listen(3000);
console.log("Application hosted on Port 3000");