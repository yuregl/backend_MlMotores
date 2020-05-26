const { celebrate, Segments, Joi } = require('celebrate');

const deleteService = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	}),
});

module.exports = deleteService;
