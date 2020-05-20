const bcrypt = require('bcrypt');
const SaltBcrypt = require('../../authBcrypt');

exports.seed = async function (knex) {
	// Deletes ALL existing entries

	const newPassword = await bcrypt.hash('123', SaltBcrypt.salt);
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
				},
			]);
		});
};
