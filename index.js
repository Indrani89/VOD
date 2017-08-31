var config= require('./config');
var server=require('./server');
var mongo = require('mongoskin');

//var dbConfig =  config.dbProduction; 

//var db = mongo.db('mongodb://'+ dbConfig.mongo.url +'/' + dbConfig.mongo.database , { safe:true });
//console.log("db->"+db);

//create a short cut to convert id to object Id
//db.toObjectId = mongo.ObjectID.createFromHexString;

server.start( config);