// Update with your config settings.
require('dotenv').config();

module.exports = {
	development: {
		client: 'pg',
		connection: {
			database: 'ml_motores',
			user: process.env.USERPOSTGRES,
			password: process.env.SENHAPOSTGRES,
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: `${__dirname}/src/database/migrations`,
		},
		seeds: {
			directory: `${__dirname}/src/database/seeds`,
		},
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};
