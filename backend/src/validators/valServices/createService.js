const { celebrate, Segments, Joi } = require('celebrate');

const createService = celebrate({
	[Segments.BODY]: Joi.object().keys({
		email: Joi.string().email().required(),
		product: Joi.string().required(),
		status: Joi.string().required(),
		description: Joi.string().optional(),
	}),
});

module.exports = createService;
