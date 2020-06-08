const knex = require('../database/');

module.exports = {
	//List Services for User ID

	async index(request, response) {
		try {
			const { user_id } = request.query;

			const results = await knex.table('services').where({ user_id });

			if (results.length === 0) {
				return response.json({ message: 'Not Found' });
			}

			return response.json(results);
		} catch (error) {
			return response.status(400).json({ error: 'Error ao listar' });
		}
	},
};
