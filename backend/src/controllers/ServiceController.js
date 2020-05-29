const knex = require('../database/');

module.exports = {
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
};
