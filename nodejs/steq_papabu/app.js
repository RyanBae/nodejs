// app.js

//[load packages]
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('sequelize');

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

var sequelize = new sequelize(
    'gpsm_Ryan',   //데이터베이스 이름
    'root',        //유저명
    'triplet1004', //비밀번호
    {
        'host': '10.10.10.54', //데이터베이스 호스트
        'dialect':'mysql'      //사용할 데이터베이스 종류
    }
);


var contract = require('./models/contract')
