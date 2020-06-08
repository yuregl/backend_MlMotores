const knex = require('../database');
const { emailSender } = require('../email/sendEmail');

module.exports = {
	//Product service creation by ID

	async create(request, response) {
		try {
			const { email, product, status, description } = request.body;

			const result = await knex('users').where({ email }).first();
			if (!result) {
				return response.json({ error: 'Esse email não está cadastrado!' });
			}
			result.password = undefined;

			const id_service = await knex('services').insert(
				{
					product,
					status,
					description,
					user_id: result.id,
				},
				'id'
			);

			const message = `Olá, o ID para consulta do seu serviço é ${id_service}`;

			emailSender(email, message);

			return response.status(200).send();
		} catch (Error) {
			return response.status(400).send({ error: 'Falha ao criar serviço' });
		}
	},

	//Update service sending ID service
	async update(request, response) {
		try {
			const { id_service } = request.query;
			const { product, status, value, description } = request.body;

			const updated_at = new Date();

			const email = await knex
				.select('users.email')
				.from('users')
				.innerJoin('services', 'users.id', 'services.user_id')
				.where({ 'services.id': id_service });

			await knex
				.table('services')
				.update({ product, status, value, description, updated_at })
				.where({ id: id_service });

			const message = `Seu serviço: ${product} de id ${id_service} foi atualizado.`;

			emailSender(email, message);

			return response.send();
		} catch (error) {
			console.log(error);

			return response.status(400).send({ error: 'Falha ao atualizar serviço' });
		}
	},

	//Delete service sending ID user

	async deleteID(request, response) {
		try {
			const { id_service } = request.query;

			await knex.table('services').where({ id: id_service }).del();
			return response.send();
		} catch (error) {
			return response.status(400).json({ error: 'Error ao apagar' });
		}
	},

	//Lists all user Services by ID

	async listIDUser(request, response) {
		try {
			const { id_user } = request.query;

			const result = await knex.table('services').where({ user_id: id_user });

			return response.send(result);
		} catch (error) {
			return response.status(400).json({ error: 'Error ao listar' });
		}
	},

	//List all services

	async list(request, response) {
		try {
			const results = await knex('services');
			return response.json(results);
		} catch (error) {
			return response.status(400).json({ error: 'Error ao apagar' });
		}
	},
};
