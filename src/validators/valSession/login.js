const { celebrate, Segments, Joi } = require('celebrate');

const login = celebrate({
	[Segments.BODY]: Joi.object().keys({
		email: Joi.string().required(),
		password: Joi.string().required(),
	}),
});

module.exports = login;
