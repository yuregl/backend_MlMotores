const knex = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Secret = process.env.SECRET;

module.exports = {
	async login(request, response) {
		const { email, password } = request.body;

		console.log(password);

		const user = await knex.table('users').where('email', email).first();

		if (!user) {
			return response.status(400).json({ error: 'Não foi achado esse email' });
		}

		if (!(await bcrypt.compare(password, user.password))) {
			return response
				.status(400)
				.json({ error: 'A senha não confere, tente novamente!' });
		}

		user.password = undefined;

		const token = jwt.sign({ id: user.id }, Secret, {
			expiresIn: 86400,
		});

		return response.send({ user, token });
	},
};
