exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('products')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('products').insert([
				{
					produto: "bomba d'água",
					status: 'EM_OBSERVACAO',
					value: 0,
				},
				{
					produto: 'Motor',
					status: 'EM_OBSERVACAO',
					value: 0,
					user_id: 14,
				},
			]);
		});
};
