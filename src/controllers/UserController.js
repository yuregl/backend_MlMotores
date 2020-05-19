const knex = require('../database');

module.exports = {
	async create(request, response) {
		const { name, surname, password, numberPhone, email } = request.body;

		return response.json({ name });
	},

	async list(request, response) {
		const results = await knex('users');

		return response.json(results);
	},
};
