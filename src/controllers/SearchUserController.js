const knex = require('../database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { emailSender } = require('../email/sendEmail');
const SaltBcrypt = parseInt(process.env.SALT);

const Secret = process.env.SECRET;

module.exports = {
	async login(request, response) {
		try {
			const { email, password } = request.body;

			const user = await knex.table('users').where({ email }).first();

			if (!user) {
				return response
					.status(400)
					.json({ error: 'Não foi achado esse email' });
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
		} catch (error) {
			return response
				.status(400)
				.send({ error: 'Erro ao tentar fazer o login' });
		}
	},

	async sendEmailForgetPassword(request, response) {
		try {
			const { email } = request.body;

			const exist = await knex.table('users').where({ email }).first();

			if (!exist) {
				return response
					.status(404)
					.send({ error: 'Não existe usuário com esse email' });
			}
			const message =
				'Foi requisitado uma troca de senha para esse email \n' +
				`Para alterar, entrar no link http://localhost:3000/forgetpassword/changepassword?email=${email}`;

			const subject = 'Troca de senha';

			emailSender(email, message, subject);

			return response.status(204).send();
		} catch (error) {
			console.log(error);
			return response.status(400).send({ error: 'error ao enviar email' });
		}
	},

	async changePassword(request, response) {
		try {
			const { email } = request.query;
			const { password } = request.body;
			const newPassword = await bcrypt.hash(password, SaltBcrypt);

			const result = await knex.table('users').where({ email }).first();

			if (!result) {
				return response
					.status(400)
					.send({ error: 'Não foi encontrado nenhum usuário com esse email' });
			}

			const updated_at = new Date();

			await knex
				.table('users')
				.update({ password: newPassword, updated_at })
				.where({ email });

			return response
				.status(200)
				.send({ message: 'Senha trocada com sucesso' });
		} catch (Error) {
			return response
				.status(400)
				.send({ error: 'Não foi possivel trocar a senha' });
		}
	},
};
