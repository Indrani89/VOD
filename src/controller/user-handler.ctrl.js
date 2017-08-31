function UserHandler(){
	console.log("Handler created for User");
//mdl - material design lite - front end template use to build modern lite weight app
	var userMdl=require('../model/users.mdl').load({col:'users'});

	return{
		create:function(req,res){
			res.json({msg:'Create user'});
		},
		find:function( req, res ){
			res.json({ msg: 'created user'});
		},
		
		get:function(req,res){
			userMdl.get(req.params,function(result){
				res.json(result);
			});
		}

	}
}
exports.load=UserHandler;