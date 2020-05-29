const { celebrate, Segments, Joi } = require('celebrate');

const updateService = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		id_admin: Joi.number().required(),
		id_service: Joi.number().required(),
	}),
	[Segments.BODY]: Joi.object().keys({
		produto: Joi.string().required(),
		status: Joi.string().required(),
		value: Joi.number().required(),
		description: Joi.string().required(),
	}),
});

module.exports = updateService;
