exports.up = function (knex) {
	return knex.schema.createTable('users', function (table) {
		table.increments('id');
		table.string('name').notNullable();
		table.string('surname').notNullable();
		table.string('password').notNullable();
		table.string('numberPhone').unique().notNullable();
		table.string('email').unique().notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
