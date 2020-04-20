const fs = require("fs");
const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development"
const config = require("../config/env")[env];

mongoose.connect(config['mongoDB']['uri'] + config['mongoDB']['databaseName'], config['mongoDB']['option'],function (err) {
    console.log('mongoose connect OK!!')
});
let db = {};
db = mongoose.connection
db.on('error', function(){
    console.log('Failed');
})
db.once('open', function(){
    console.log('DB Connected !!')
});
db.Schema = mongoose.Schema



module.exports = db;