const { celebrate, Segments, Joi } = require('celebrate');

const listService = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		id_admin: Joi.number().required(),
	}),
});

module.exports = listService;
