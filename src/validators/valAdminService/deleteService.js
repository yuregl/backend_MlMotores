const { celebrate, Segments, Joi } = require('celebrate');

const deleteService = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		id_admin: Joi.number().required(),
		id_service: Joi.number().required(),
	}),
});

module.exports = deleteService;
