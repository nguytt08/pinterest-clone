
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('urlLinks', function(table) {
      table.increments('link_id').primary();
      table.string('url', 5000).notNullable();
      table.integer('user_id').notNullable().unsigned();
      table.foreign('user_id').references('user_id').inTable('users');
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('urlLinks')
  ])
};
