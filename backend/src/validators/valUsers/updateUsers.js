const { celebrate, Segments, Joi } = require('celebrate');

const updateUser = celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		surname: Joi.string().required(),
		password: Joi.string().required().min(6).max(20),
		numberPhone: Joi.string().required().min(9).max(11),
		email: Joi.string().required().email(),
	}),
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	}),
});

module.exports = updateUser;
