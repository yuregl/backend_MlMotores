exports.up = function (knex) {
	return knex.schema.createTable('relationship', function (table) {
		table.integer('user_id').references('users.id').notNullable();

		table.integer('products_id').references('products.id').notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('relationship');
};
