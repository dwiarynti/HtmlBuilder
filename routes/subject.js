
var express = require('express');
var router = express.Router();

var db = require('./connection');

var collection = db.get('Subject_Collection');
var ObjectId = require('mongodb').ObjectID;



router.get('/subjects/Init/',function(req, res) {
  
    collection.find({"IsActive":true}, function(err, subjects){
      if (err) res.json(500, err);
      else res.json({"obj": subjects});
    });
 
});




module.exports = router;

