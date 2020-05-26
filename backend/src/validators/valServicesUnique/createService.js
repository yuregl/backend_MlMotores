const { celebrate, Segments, Joi } = require('celebrate');

const createService = celebrate({
	[Segments.BODY]: Joi.object().keys({
		product: Joi.string().required(),
		status: Joi.string().required(),
		description: Joi.string().optional(),
	}),
});

module.exports = createService;
