function setup(app,handlers){
	console.log("Set Router for VOD###");
	//default home page
	app.get('/',function(req,res){
		console.log('User Info: ',req.headers['user-agent'],  req.headers['x-forwarded-for'] || req.connection.remoteAddress);
   		res.sendFile(__dirname+'./public/app/index.html');
	});
	app.get('/api/user',handlers.user.get);
	app.post('/api/users',handlers.user.create);
	app.post('/api/find',handlers.user.find);
}exports.setup=setup;