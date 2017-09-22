module.exports = (params) => {
	const nodemailer = require('nodemailer');
	const path = params.transporterConnectionString;
	const transporter = nodemailer.createTransport(path);

	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
			return;
		}
		
		console.log('Server is ready to send e-mail messages!');
	});

	return { transporter, nodemailer };
};