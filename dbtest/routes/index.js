var express = require('express');
var router = express.Router();

const db = require('../models/index');
const mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/db', function(req, res, next){
  console.log(db)
  let scheduleModel = mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true}
  })
  let schedules = mongoose.model('schedules', scheduleModel)
  schedules.find(function(err, result){
    if(err){
      console.log(err);
    }else{
      console.log(result);
    };
  })


  res.render('db', {title:'DB TEST !!'})
});

module.exports = router;
