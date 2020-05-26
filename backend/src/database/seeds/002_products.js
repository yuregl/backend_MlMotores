exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('services')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('services').insert([
				{
					product: "bomba d'água",
					status: 'EM_OBSERVACAO',
				},
				{
					product: 'Motor',
					status: 'EM_OBSERVACAO',
					user_id: 1,
				},
			]);
		});
};
