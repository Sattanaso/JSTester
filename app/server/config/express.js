module.exports = (express, app, params) => {
	const path = require('path');
	const cors = require('cors');
	const bodyParser = require('body-parser');
	const cookieParser = require('cookie-parser');
	const session = require('express-session');
	const passport = require('passport');
	
	let sessionObj = {
		secret: params.sessionSecret,
		resave: true,
		saveUninitialized: true
	}

	app.disable('x-powered-by');
	app.use(cors());
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(session(sessionObj));
	app.use(passport.initialize());
	app.use(passport.session());

	const staticFolderName = '../../client/ui';
	app.use('/', express.static(path.join(__dirname, staticFolderName)));
}
