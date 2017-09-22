const constantz = require('./constants.json');

module.exports = {
	development: {
		db: constantz.mongodbConnection || 'mongodb://localhost:27017/appdb',
		transporterConnectionString: constantz.transporterConnection,
		sessionSecret: 'session-secret',
		webTokenSecret: 'web-token-secret',
		cookieName: 'cookie-name',
		port: 3333
	},
	production: {
		db: constantz.mongodbConnection,
		transporterConnectionString: process.env.SMTP_INFO,
		sessionSecret: process.env.SESSION_SECRET,
		webTokenSecret: process.env.WEB_TOKEN_SECRET,
		cookieName: process.env.COOKIE_NAME,
		port: process.env.PORT
	}
}
