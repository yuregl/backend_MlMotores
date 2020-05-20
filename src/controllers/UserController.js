const knex = require('../database');
const bcrypt = require('bcrypt');

const SaltBcrypt = process.env.salt;

module.exports = {
	// CRIAÇÃO DE USUARIOS
	async create(request, response) {
		const { name, surname, password, numberPhone, email } = request.body;

		const exist = await knex.table('users').first('email').where({
			email,
		});

		if (exist) {
			console.log(exist);
			return response.status(409).send();
		}

		const newPassword = await bcrypt.hash(password, SaltBcrypt.salt);

		await knex('users').insert({
			name,
			surname,
			password: newPassword,
			numberPhone,
			email,
		});

		return response.status(201).send();
	},

	//LISTAGEM DE USUÁRIOS

	async list(request, response) {
		const results = await knex('users');

		return response.json(results);
	},

	//ALTERAÇÃO DE DADOS DE USUÁRIO

	async update(request, response) {
		const { name, surname, password, numberPhone, email } = request.body;
		const { id } = request.params;

		await knex('users')
			.update({ name, surname, password, numberPhone, email })
			.where({ id });

		return response.send();
	},

	//DELAÇÃO DE USUÁRIO

	async delete(request, response) {
		try {
			const { id } = request.params;

			await knex('users').where({ id }).del();

			return response.send();
		} catch (error) {
			return response.json({ error });
		}
	},
};
