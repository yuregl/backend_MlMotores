const { celebrate, Segments, Joi } = require('celebrate');

const lookService = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		id_service: Joi.number().required(),
	}),
});

module.exports = lookService;
