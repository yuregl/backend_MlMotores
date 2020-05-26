const { celebrate, Segments, Joi } = require('celebrate');

const deleteService = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.string().required(),
	}),
});

module.exports = deleteService;
