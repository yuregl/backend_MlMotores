const bcrypt = require('bcrypt');
const SaltBcrypt = parseInt(process.env.SALT);

exports.seed = async function (knex) {
	// Deletes ALL existing entries

	const newPassword = await bcrypt.hash('123456', SaltBcrypt);

	return knex('users')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{
					name: 'yure',
					surname: 'galdino',
					password: newPassword,
					numberPhone: '998352437',
					email: 'yuregaldino@hotmail.com',
					admin: true,
				},
			]);
		});
};
