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
};
