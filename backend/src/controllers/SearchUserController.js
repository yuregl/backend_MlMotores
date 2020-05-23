const knex = require('../database');
const bcrypt = require('bcrypt');

module.exports = {
	async login(request, response) {
		const { email, password } = request.body;

		const user = await knex.table('users').where('email', email).first();

		if (!user) {
			return response.status(400).json({ error: 'Não foi achado esse email' });
		}

		if (await bcrypt.compare(password, user.password)) {
			user.password = undefined;
		}
		return response.json(user);
	},
};
