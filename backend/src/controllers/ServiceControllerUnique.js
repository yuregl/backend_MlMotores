const knex = require('../database');

module.exports = {
	async product(request, response) {
		const { id } = request.params;

		const produto = await knex.table('products').where({ id }).first();

		if (!produto) {
			return response
				.status(400)
				.json({ error: 'Não foi achado nenhum produto com esse ID' });
		}

		return response.json(produto);
	},

	async create(request, response) {
		const { produto, status, value, description } = request.body;

		await knex('products').insert({
			produto,
			status,
			value,
			description,
		});

		return response.status(200).send();
	},

	async update(request, response) {
		const { id } = request.params;
		const { produto, status, value, description } = request.body;

		await knex
			.table('products')
			.update({ produto, status, value, description })
			.where({ id });

		return response.send();
	},

	async deleteID(request, response) {
		try {
			const { id } = request.params;
			await knex.table('products').where({ id }).del();
			return response.send();
		} catch (error) {
			return response.status(400).json({ error: 'Error ao apagar' });
		}
	},
};
