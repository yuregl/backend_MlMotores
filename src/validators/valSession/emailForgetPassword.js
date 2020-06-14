const { celebrate, Segments, Joi } = require('celebrate');

const email = celebrate({
	[Segments.BODY]: Joi.object().keys({
		email: Joi.string().required(),
	}),
});

module.exports = email;
