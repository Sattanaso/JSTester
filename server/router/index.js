module.exports = (express, app, mongo, nodemailer, params) => {
	//const controllers = require('./server.service/controller')(mongo, nodemailer, params);

	const apiRouter = new express.Router();

	app.use('/api', apiRouter);

	// apiRouter
	// 	.post('/users', controllers.userCtrl.newUser)
	// 	.put('/users', controllers.userCtrl.login)
	// 	.put('/users/image', controllers.userCtrl.imageUpdate)
	// 	.put('/users/change-password', controllers.userCtrl.changePassword)
	// 	.put('/users/forgot-password', controllers.userCtrl.forgotPassword)
	// 	.post('/users/contact-us', controllers.userCtrl.contactUs)


	app.get('*', (req, res) => {
		res.send('ERROR: No such a route!');
	});
}
