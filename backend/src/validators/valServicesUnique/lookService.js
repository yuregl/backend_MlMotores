const { celebrate, Segments, Joi } = require('celebrate');

const lookService = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	}),
});

module.exports = lookService;
