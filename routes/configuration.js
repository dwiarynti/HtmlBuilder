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

router.get('/configurationform/init', function(req,res)
{
		ConfigurationFromcollection.find({"formname":"Profile","IsActive" : true}, function(err, obj){
		if(err) {res.json(500, err);}
		else
        { 
          res.json({'Obj': obj, success: true});
        }
	});
});
module.exports = router;