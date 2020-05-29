const knex = require('../database');

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

	//Update service sending ID service
	async update(request, response) {
		const { id_service } = request.query;
		const { product, status, value, description } = request.body;

		const updated_at = new Date();

		await knex
			.table('services')
			.update({ product, status, value, description, updated_at })
			.where({ id: id_service });

		return response.send();
	},

	//Delete service sending ID user

	async deleteID(request, response) {
		try {
			const { id_service } = request.query;

			await knex.table('services').where({ id: id_service }).del();
			return response.send();
		} catch (error) {
			return response.status(400).json({ error: 'Error ao apagar' });
		}
	},

	//Lists all user Services by ID

	async listIDUser(request, response) {
		try {
			const { id_user } = request.query;

			const result = await knex.table('services').where({ user_id: id_user });

			return response.send(result);
		} catch (error) {
			return response.status(400).json({ error: 'Error ao listar' });
		}
	},

	//List all services

	async list(request, response) {
		try {
			const results = await knex('services');
			return response.json(results);
		} catch (error) {
			return response.status(400).json({ error: 'Error ao apagar' });
		}
	},
};
