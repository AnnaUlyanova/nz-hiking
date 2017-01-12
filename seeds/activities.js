
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activities').insert({
          id: 1,
          walk_id: 4,
          description: 'Onepoto to Panekire Hut Lookout walk',
          url: ''}),
        knex('activities').insert({
          id: 2,
          walk_id: 4,
          description: 'Hinerau Walk',
          url: ''}),
        knex('activities').insert({
          id: 3,
          walk_id: 4,
          description: 'Aniwaniwa Falls Track',
          url: ''}),
        knex('activities').insert({
          id: 4,
          walk_id: '4',
          description: 'Papakorito Falls',
          url: ''}),
        knex('activities').insert({
          id: 5,
          walk_id: 1,
          description: 'Cascade Falls',
          url: ''}),
        knex('activities').insert({
          id: 6,
          walk_id: 1,
          description: 'Awaroa Beach',
          url: ''}),
        knex('activities').insert({
          id: 7,
          walk_id: 1,
          description: 'Cleopatras Pool',
          url: ''}),
        knex('activities').insert({
          id: 8,
          walk_id: 1,
          description: 'Kayaking',
          url: ''}),
        knex('activities').insert({
          id: 9,
          walk_id: 2,
          description: 'Mountain biking',
          url: ''}),
        knex('activities').insert({
          id: 10,
          walk_id: 2,
          description: 'Flanagans Corner',
          url: ''}),
        knex('activities').insert({
          id: 11,
          walk_id: 2,
          description: 'The \‘enchanted forest\’',
          url: ''}),
        knex('activities').insert({
          id: 12,
          walk_id: 3,
          description: 'Iris Burn Waterfall',
          url: ''}),
        knex('activities').insert({
          id: 13,
          walk_id: 3,
          description: 'Luxmore Cave',
          url: ''})
      ]);
    });
};
