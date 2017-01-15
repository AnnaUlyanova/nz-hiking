exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('walks_general', function(table){
    table.integer('lat')
    table.integer('lng')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('walks_general', function(table){
      table.dropColumn('lat')
      table.dropColumn('lng')
    })
  ])
};
