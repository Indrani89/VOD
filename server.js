var express=require('express');
var app=express();
var router=require('./src/view/router');
var http=require('http');
var bodyParser=require('body-parser');
var moment=require('moment');
var mongojs=require('mongojs');
var db = mongojs('vodapp',['vodapp']);

//access control CORS - to handle cross origin http request
var allowCrossDomain=function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
}
app.use(express.static(__dirname+'/public'));
app.use(allowCrossDomain);
app.use(bodyParser.json());
db.toObjectId = mongojs.ObjectID.createFromHexString;

//Update History details in db
app.post('/vodapp',function(req,res){
	  db.vodapp.insert(req.body, function(err,doc){
		res.json(db);
	})
});

//to get stored history details from DB according to video play time sorted order
app.get('/vodapp/:user_key',function(req,res){
	    var user_keys=req.params.user_key;
		db.vodapp.find().sort({startTime:-1}).toArray(function(err,docs){
		res.json(docs);
	});
});

function start(config){
	var handlers={
		user: require('./src/controller/user-handler.ctrl').load(),
	};
	router.setup(app,handlers)
		var port=process.env.PORT || config.nodeServer.port;
		app.listen(port, process.env.HOST || '0.0.0.0');
	 	console.log("Server is listening to the port:"+port);
}
exports.start=start;
exports.app=app;