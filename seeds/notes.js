
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('notes').insert({
          id: 1,
          user_walk_id: 1,
          note: "First Note"
        })
      ]);
    });
};
