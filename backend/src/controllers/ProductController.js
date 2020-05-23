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
};
