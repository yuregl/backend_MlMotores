const { celebrate, Segments, Joi } = require('celebrate');

const listServices = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		user_id: Joi.number().required(),
	}),
});

module.exports = listServices;
