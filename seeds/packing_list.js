
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('packing_list').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('packing_list').insert({
          id: 1,
          item: 'Water bottle',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 2,
          item: 'Water bottle',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 3,
          item: 'Water bottle',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 4,
          item: 'Water bottle',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 5,
          item: 'Water bottle',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 6,
          item: 'Water bottle',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 7,
          item: 'Water bottle',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 8,
          item: 'Water bottle',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 9,
          item: 'Water bottle',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 10,
          item: 'Water bottle',
          walk_id: 10}),
        knex('packing_list').insert({
          id: 11,
          item: 'Water bottle',
          walk_id: 11}),
        knex('packing_list').insert({
          id: 12,
          item: 'Water bottle',
          walk_id: 12}),
        knex('packing_list').insert({
          id: 13,
          item: 'Water bottle',
          walk_id: 13}),
        knex('packing_list').insert({
          id: 14,
          item: 'Water bottle',
          walk_id: 14}),
        knex('packing_list').insert({
          id: 15,
          item: 'Water bottle',
          walk_id: 15}),
        knex('packing_list').insert({
          id: 16,
          item: 'Water bottle',
          walk_id: 16}),
        knex('packing_list').insert({
          id: 17,
          item: 'Water bottle',
          walk_id: 17}),
        knex('packing_list').insert({
          id: 18,
          item: 'Water bottle',
          walk_id: 18}),
        knex('packing_list').insert({
          id: 19,
          item: 'Torch',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 20,
          item: 'Torch',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 21,
          item: 'Torch',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 22,
          item: 'Torch',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 23,
          item: 'Torch',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 24,
          item: 'Torch',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 25,
          item: 'Torch',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 26,
          item: 'Torch',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 27,
          item: 'Torch',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 28,
          item: 'Portable gas stove',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 29,
          item: 'Portable gas stove',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 30,
          item: 'Portable gas stove',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 31,
          item: 'Portable gas stove',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 32,
          item: 'Portable gas stove',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 33,
          item: 'Portable gas stove',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 34,
          item: 'Portable gas stove',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 35,
          item: 'Portable gas stove',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 36,
          item: 'Portable gas stove',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 37,
          item: 'Bug spray',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 38,
          item: 'Bug spray',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 39,
          item: 'Bug spray',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 40,
          item: 'Snack (nuts, chocolates)',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 41,
          item: 'Snack (nuts, chocolates)',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 42,
          item: 'Snack (nuts, chocolates)',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 43,
          item: 'Snack (nuts, chocolates)',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 44,
          item: 'Snack (nuts, chocolates)',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 45,
          item: 'Snack (nuts, chocolates)',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 46,
          item: 'Snack (nuts, chocolates)',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 47,
          item: 'Snack (nuts, chocolates)',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 48,
          item: 'Snack (nuts, chocolates)',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 49,
          item: 'Snack (nuts, chocolates)',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 50,
          item: 'Snack (nuts, chocolates)',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 51,
          item: 'Snack (nuts, chocolates)',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 52,
          item: 'Snack (nuts, chocolates)',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 53,
          item: 'Snack (nuts, chocolates)',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 54,
          item: 'Snack (nuts, chocolates)',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 55,
          item: 'Snack (nuts, chocolates)',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 56,
          item: 'Snack (nuts, chocolates)',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 57,
          item: 'Snack (nuts, chocolates)',
          walk_id: 9})
      ]);
    });
};
