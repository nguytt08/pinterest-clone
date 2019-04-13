// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'user_HERE!',
      password: 'password_HERE!',
      database: 'pinterest_clone',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'user_HERE!',
      password: 'password_HERE!',
      database: 'pinterest_clone'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '/knex/knex_migrations'
    }
  },

  production: {
      host: '127.0.0.1',
      user: 'user_HERE!',
      password: 'password_HERE!',
      database: 'pinterest_clone'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '/knex/knex_migrations'
    }
  }

