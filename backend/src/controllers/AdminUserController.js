const knex = require('../database');

module.exports = {
	// creating users
	// async create(request, response) {
	// 	const { name, surname, password, numberPhone, email } = request.body;

	// 	const exist = await knex.table('users').first('email').where({
	// 		email,
	// 	});

	// 	if (exist) {
	// 		console.log(exist);
	// 		return response.status(409).send();
	// 	}

	// 	const newPassword = await bcrypt.hash(password, SaltBcrypt);

	// 	await knex('users').insert({
	// 		name,
	// 		surname,
	// 		password: newPassword,
	// 		numberPhone,
	// 		email,
	// 	});

	// 	return response.status(201).send();
	// },

	//list users

	async list(request, response) {
		try {
			const results = await knex
				.select('id', 'name', 'surname', 'numberPhone', 'email')
				.from('users');
			return response.json(results);
		} catch (err) {
			return response.status(400).send({ error: 'Erro ao listar usuários' });
		}
	},

	//Delete User send ID User
	async deleteUser(request, response) {
		try {
			const { id_user } = request.params;

			await knex('users').where({ id_user }).del();

			return response.send();
		} catch (error) {
			return response.json({ error });
		}
	},
};
