
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('urlLinks', function(table) {
      table.string('username');
      //more schemas here
      //finish up urlLinks
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('urlLinks')
  ])
};
