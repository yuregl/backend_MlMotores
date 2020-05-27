const knex = require('../database/');

module.exports = {
	//Product service creation by ID

	async create(request, response) {
		const { email, product, status, description } = request.body;

		const result = await knex('users').where({ email }).first();
		if (!result) {
			return response.json({ error: 'Esse email não está cadastrado!' });
		}
		result.password = undefined;

		await knex('services').insert({
			product,
			status,
			description,
			user_id: result.id,
		});

		return response.status(200).send();
	},

	//List all services

	async list(request, response) {
		const { page = 1 } = request.query;

		const results = await knex('services')
			.limit(10)
			.offset((page - 1) * 10);

		return response.json(results);
	},

	//List Services for User ID

	async index(request, response) {
		const { user_id } = request.query;

		console.log(user_id);

		const results = await knex.table('services').where({ user_id });

		if (results.length === 0) {
			return response.json({ message: 'Not Found' });
		}

		return response.json(results);
	},

	async update(request, response) {
		const { id } = request.params;
		const { product, status, value, description } = request.body;

		const updated_at = new Date();

		await knex
			.table('services')
			.update({ product, status, value, description, updated_at })
			.where({ id });

		return response.send();
	},

	//Delete service sending ID User

	async deleteID(request, response) {
		try {
			const { id } = request.params;
			await knex.table('services').where({ id }).del();
			return response.send();
		} catch (error) {
			return response.status(400).json({ error: 'Error ao apagar' });
		}
	},
};
