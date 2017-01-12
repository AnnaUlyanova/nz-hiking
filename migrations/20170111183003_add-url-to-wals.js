exports.up = function(knex, Promise) {  
  return Promise.all([
    knex.schema.table('walks_general', function(table){
    table.string('pdf_url')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('walks_general', function(table){
      table.dropColumn('pdf_url');
    })
  ])
};
