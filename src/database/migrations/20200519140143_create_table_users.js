exports.up = function (knex) {
	return knex.schema.createTable('users', function (table) {
		table.increments('id');
		table.string('name').notNullable();
		table.string('surname').notNullable();
		table.string('password').notNullable();
		table.string('numberPhone').notNullable();
		table.string('email').unique().notNullable();
		table.boolean('admin').notNullable().defaultTo(false);

		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
