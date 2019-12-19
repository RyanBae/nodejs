// app.js

//[load packages]
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//[configure app to use bodyparser]
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//[configure server port]
var port = process.env.PORT || 8080;

//[configure router]
var router = require('./routes')(app, Book)

//[run server]
var server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});

//[configure mongoose]
//connect to mongodb server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    //connected to mongodb server
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');
// 따로 설정할 파라미터가 있으면 다음과 같이 uri 설정
// mongoose.connect('mongodb://username:password@host:port/database?options...');

//define model
var book = require('./models/book');