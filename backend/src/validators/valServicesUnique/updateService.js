const { celebrate, Segments, Joi } = require('celebrate');

const updateService = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	}),
	[Segments.BODY]: Joi.object().keys({
		product: Joi.string().required(),
		status: Joi.string().required(),
		value: Joi.number().required(),
		description: Joi.string().required(),
	}),
});

module.exports = updateService;
