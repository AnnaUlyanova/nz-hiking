
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
          item: 'Torch',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 11,
          item: 'Torch',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 12,
          item: 'Torch',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 13,
          item: 'Torch',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 14,
          item: 'Torch',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 15,
          item: 'Torch',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 16,
          item: 'Torch',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 17,
          item: 'Torch',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 18,
          item: 'Torch',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 19,
          item: 'Portable gas stove',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 20,
          item: 'Portable gas stove',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 21,
          item: 'Portable gas stove',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 22,
          item: 'Portable gas stove',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 23,
          item: 'Portable gas stove',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 24,
          item: 'Portable gas stove',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 25,
          item: 'Portable gas stove',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 26,
          item: 'Portable gas stove',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 27,
          item: 'Portable gas stove',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 28,
          item: 'Bug spray',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 29,
          item: 'Bug spray',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 30,
          item: 'Bug spray',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 31,
          item: 'Snack (nuts, chocolates)',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 32,
          item: 'Snack (nuts, chocolates)',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 33,
          item: 'Snack (nuts, chocolates)',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 34,
          item: 'Snack (nuts, chocolates)',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 35,
          item: 'Snack (nuts, chocolates)',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 36,
          item: 'Snack (nuts, chocolates)',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 37,
          item: 'Snack (nuts, chocolates)',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 38,
          item: 'Snack (nuts, chocolates)',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 39,
          item: 'Snack (nuts, chocolates)',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 40,
          item: 'Sleeping bag',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 41,
          item: 'Sleeping bag',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 42,
          item: 'Sleeping bag',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 43,
          item: 'Sleeping bag',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 44,
          item: 'Sleeping bag',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 45,
          item: 'Sleeping bag',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 46,
          item: 'Sleeping bag',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 47,
          item: 'Sleeping bag',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 48,
          item: 'Sleeping bag',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 49,
          item: 'Sunblock',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 50,
          item: 'Sunblock',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 51,
          item: 'Sunblock',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 52,
          item: 'Sunblock',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 53,
          item: 'Sunblock',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 54,
          item: 'Sunblock',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 55,
          item: 'Sunblock',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 56,
          item: 'Sunblock',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 57,
          item: 'Sunblock',
          walk_id: 9}),
        knex('packing_list').insert({
          id: 58,
          item: 'Sunglasses',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 59,
          item: 'Sunglasses',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 60,
          item: 'Sunglasses',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 61,
          item: 'Sunglasses',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 62,
          item: 'Towel',
          walk_id: 1}),
        knex('packing_list').insert({
          id: 63,
          item: 'Towel',
          walk_id: 4}),
        knex('packing_list').insert({
          id: 64,
          item: 'Towel',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 65,
          item: 'Towel',
          walk_id: 6}),
        knex('packing_list').insert({
          id: 66,
          item: 'Thermo Layer Top/Pans',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 67,
          item: 'Thermo Layer Top/Pans',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 68,
          item: 'Thermo Layer Top/Pans',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 69,
          item: 'Thermo Layer Top/Pans',
          walk_id: 7}),
        knex('packing_list').insert({
          id: 70,
          item: 'Thermo Layer Top/Pans',
          walk_id: 8}),
        knex('packing_list').insert({
          id: 71,
          item: 'Hiking Poles',
          walk_id: 2}),
        knex('packing_list').insert({
          id: 72,
          item: 'Hiking Poles',
          walk_id: 3}),
        knex('packing_list').insert({
          id: 73,
          item: 'Hiking Poles',
          walk_id: 5}),
        knex('packing_list').insert({
          id: 74,
          item: 'Hiking Poles',
          walk_id: 7})
      ]);
    });
};
