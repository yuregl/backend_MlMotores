const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_SENDING,
		pass: process.env.PASSWORD_EMAIL_SENDING,
	},
});

const emailSender = async (destiny, message, subject) => {
	let mailOptions = {
		from: process.env.EMAIL_SENDING,
		to: destiny,
		subject: subject ? subject : 'Serviço ML Motores',
		text: message,
	};
	console.log(subject);

	await transporter.sendMail(mailOptions, (err, info) => {
		if (err) {
			console.log('error');
		} else {
			console.log('email sendig');
		}
	});
};

module.exports = { emailSender };
