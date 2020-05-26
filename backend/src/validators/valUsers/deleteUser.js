const { celebrate, Segments, Joi } = require('celebrate');

const deleteUser = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	}),
});

module.exports = deleteUser;
