module.exports = (express, app, params) => {
	const path = require('path');
	const bodyParser = require('body-parser');
	const cookieParser = require('cookie-parser');
	const session = require('express-session');
	
	let sessionObj = {
		secret: params.sessionSecret,
		resave: true,
		saveUninitialized: true
	}

	app.disable('x-powered-by');
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(session(sessionObj));

	const staticFolderName = '../../client';
	app.use('/', express.static(path.join(__dirname, staticFolderName)));
}
