const { celebrate, Segments, Joi } = require('celebrate');

const listServiceAdmin = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		id_admin: Joi.number().required(),
	}),
});

module.exports = listServiceAdmin;
