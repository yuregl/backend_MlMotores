const knex = require('../database');

module.exports = {
	//service creation without user id

	async create(request, response) {
		const { product, status, description } = request.body;

		await knex('services').insert({
			product,
			status,
			description,
		});

		return response.status(200).send();
	},

	//service update without user id

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

	//service delete without user id

	async deleteID(request, response) {
		try {
			const { id_service } = request.query;
			await knex.table('services').where({ id: id_service }).del();
			return response.send();
		} catch (error) {
			return response.status(400).json({ error: 'Error ao apagar' });
		}
	},

	async list(request, response) {
		try {
			const result = await knex.table('services').where({ user_id: null });

			return response.send(result);
		} catch (error) {
			return response.status(400).json({ error: 'Error ao listar' });
		}
	},
};
