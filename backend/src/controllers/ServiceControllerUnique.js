const knex = require('../database');

module.exports = {
	//look for service by id

	async product(request, response) {
		try {
			const { id_service } = request.query;

			const product = await knex
				.table('services')
				.where({ id: id_service })
				.first();

			if (!product) {
				return response
					.status(400)
					.json({ error: 'Não foi achado nenhum produto com esse ID' });
			}

			if (product.user_id) {
				return response
					.status(401)
					.json({ error: 'Precisa estar logado para verificar' });
			}

			return response.json(product);
		} catch (error) {
			return response.status(400).json({ error: 'Error ao listar' });
		}
	},
};
