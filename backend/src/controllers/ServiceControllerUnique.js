const knex = require('../database');

module.exports = {
	//look for service by id

	async product(request, response) {
		const { id } = request.params;

		const product = await knex.table('services').where({ id }).first();

		if (!product) {
			return response
				.status(400)
				.json({ error: 'Não foi achado nenhum produto com esse ID' });
		}

		return response.json(product);
	},

	async create(request, response) {
		const { product, status, description } = request.body;

		await knex('services').insert({
			product,
			status,
			description,
		});

		return response.status(200).send();
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
