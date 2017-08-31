module.exports = {
	nodeServer:{
			host:'localhost',
			port:8081
		},

	dbLocal: {
			mongo: {
				url: 'localhost:27017',
				database: 'vodapp'
			}
		},
	dbProduction: {
			mongo: {
				url: 'sa:1qaz2wsx@ds161823.mlab.com:37155/vodapp',
				database: 'vodapp'
			}
		}
};