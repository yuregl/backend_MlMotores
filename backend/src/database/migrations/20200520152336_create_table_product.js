exports.up = function (knex) {
	return knex.schema.createTable('services', function (table) {
		table.increments('id');
		table.string('product').notNullable();
		table
			.enu('status', ['EM_OBSERVACAO', 'FINALIZADO', 'EM_MANUTENCAO'])
			.notNullable();
		table.float('value').defaultTo('0.00');
		table.text('description');

		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());

		table.integer('user_id').references('users.id').onDelete('CASCADE');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('services');
};
