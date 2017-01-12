
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_walks').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('user_walks').insert({
          id: 1,
          walk_id: 1,
          date: '10 Dec 2016'})
      ]);
    });
};
