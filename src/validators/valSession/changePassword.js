const { celebrate, Segments, Joi } = require('celebrate');

const changePassword = celebrate({
	[Segments.BODY]: Joi.object().keys({
		password: Joi.string().required(),
	}),
});

module.exports = changePassword;
