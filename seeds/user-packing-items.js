
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_packing_items').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_packing_items').insert({
          id: 1,
          user_walk_id: 1,
          item: 'water'})      
      ]);
    });
};
