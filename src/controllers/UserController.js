const knex = require('../database');

module.exports = {
	async create(request, response) {
		const { name, surname, password, numberPhone, email } = request.body;
		console.log(request.body);

		await knex('users').insert({
			name,
			surname,
			password,
			numberPhone,
			email,
		});

		return response.status(201).send();
	},

	async list(request, response) {
		const results = await knex('users');

		return response.json(results);
	},

	async update(request, response) {
		const { name, surname, password, numberPhone, email } = request.body;
		const { id } = request.params;

		await knex('users')
			.update({ name, surname, password, numberPhone, email })
			.where({ id });

		return response.send();
	},

	async delete(request, response) {
		try {
			const { id } = request.params;

			await knex('users').where({ id }).del();

			return response.send();
		} catch (error) {
			return response.json({ error });
		}
	},
};
