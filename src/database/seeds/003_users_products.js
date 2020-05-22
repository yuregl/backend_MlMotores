exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('relationship')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('relationship').insert([
				{
					user_id: 14,
					products_id: 1,
				},
			]);
		});
};
