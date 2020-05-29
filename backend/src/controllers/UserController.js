const knex = require('../database');
const bcrypt = require('bcrypt');

const SaltBcrypt = parseInt(process.env.SALT);

module.exports = {
	// creating users
	async create(request, response) {
		const { name, surname, password, numberPhone, email } = request.body;

		const exist = await knex.table('users').first('email').where({
			email,
		});

		if (exist) {
			console.log(exist);
			return response.status(409).send();
		}

		const newPassword = await bcrypt.hash(password, SaltBcrypt);

		await knex('users').insert({
			name,
			surname,
			password: newPassword,
			numberPhone,
			email,
		});

		return response.status(201).send();
	},

	//changing user data

	async update(request, response) {
		const { name, surname, password, numberPhone } = request.body;
		const { id } = request.params;

		const newPassword = await bcrypt.hash(password, SaltBcrypt);

		const user = knex.table('users').where({ id }).first();
		const updated_at = new Date();

		if (user.numberPhone === numberPhone) {
			await knex('users')
				.update({
					name,
					surname,
					password: newPassword,
					updated_at,
				})
				.where({ id });
		}

		await knex('users')
			.update({
				name,
				surname,
				password: newPassword,
				numberPhone,
				updated_at,
			})
			.where({ id });

		return response.send();
	},

	//delete user

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
