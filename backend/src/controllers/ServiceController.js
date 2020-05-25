const knex = require('../database/');

module.exports = {
	//Criação de serviço de produto por ID

	async create(request, response) {
		const { email, produto, status, value, description } = request.body;

		const result = await knex('users').where({ email }).first();
		if (!result) {
			return response.json({ error: 'Esse email não está cadastrado!' });
		}
		result.password = undefined;

		await knex('products').insert({
			produto,
			status,
			value,
			description,
			user_id: result.id,
		});

		return response.status(200).send();
	},

	//Lista todos os serviços

	async list(request, response) {
		const results = await knex('products');

		return response.json(results);
	},

	//Lista Serviços por ID de usuário

	async index(request, response) {
		const { user_id } = request.query;

		const results = await knex.table('products').where({ user_id });

		if (results.length === 0) {
			return response.json({ message: 'NotFound' });
		}

		return response.json(results);
	},

	async update(request, response) {
		const { id } = request.params;
		const { produto, status, value, description } = request.body;

		await knex
			.table('products')
			.update({ produto, status, value, description })
			.where({ id });

		return response.send();
	},

	//Deleta Serviço passando o ID

	async deleteID(request, response) {
		try {
			const { id } = request.params;
			await knex.table('products').where({ id }).del();
			return response.send();
		} catch (error) {
			return response.status(400).json({ error: 'Error ao apagar' });
		}
	},
};
