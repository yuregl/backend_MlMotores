exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('users')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{
					name: 'yure',
					surname: 'galdino',
					password: '123',
					numberPhone: '998352437',
					email: 'yuregaldino@hotmail.com',
				},
			]);
		});
};
