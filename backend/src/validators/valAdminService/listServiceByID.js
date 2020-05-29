const { celebrate, Segments, Joi } = require('celebrate');

const listServiceByIDAdmin = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		id_admin: Joi.number().required(),
		id_user: Joi.number().required(),
	}),
});

module.exports = listServiceByIDAdmin;
