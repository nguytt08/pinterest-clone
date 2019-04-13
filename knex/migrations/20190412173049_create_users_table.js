
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments('user_id').primary();
      table.string('user_name', 1000);
      table.string('password', 1000);

      //more schemas here
      //finish up urlLinks
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
