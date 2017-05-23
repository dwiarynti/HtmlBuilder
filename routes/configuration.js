var express = require('express');
var router = express.Router();
var db = require('./connection');


var ObjectId = require('mongodb').ObjectID;
var collection = db.get('ConfigurationFrom_Collection');


router.post('/configurationform/create', function(req,res)
{
	for(var i = 0; i < req.body.data.length; i++ )
	{
		var obj = req.body.data[i];
		ConfigurationFromcollection.insert(obj, function(err,data)
		{
		if(i == req.body.data.length)
		{
			res.json({success:true})
		}
		});
	}
});