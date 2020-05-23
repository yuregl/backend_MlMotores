exports.up = function (knex) {
	return knex.schema.createTable('products', function (table) {
		table.increments('id');
		table.string('produto').notNullable();
		table
			.enu('status', ['EM_OBSERVACAO', 'FINALIZADO', 'EM_MANUTENCAO'])
			.notNullable();
		table.integer('value').notNullable();
		table.text('description');

		table.integer('user_id').references('users.id');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('products');
};
