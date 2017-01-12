
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walks_general').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('walks_general').insert({
          id: 1,
          walk_name: 'Abel Tasman Coast Track',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 2,
          walk_name: 'Heaphy Track',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 3,
          walk_name: 'Kepler Track',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 4,
          walk_name: 'Lake Waikaremoana',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 5,
          walk_name: 'Milford Track',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 6,
          walk_name: 'Rakiura Track',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 7,
          walk_name: 'Routeburn Track',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 8,
          walk_name: 'Tongariro Northern Circuit',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 9,
          walk_name: 'Whanganui Journey',
          description: '',
          coordinates: '',
          full_walk: true,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 10,
          walk_name: 'Abel Tasman Coast Track',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 11,
          walk_name: 'Heaphy Track',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 12,
          walk_name: 'Kepler Track',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 13,
          walk_name: 'Lake Waikaremoana',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 14,
          walk_name: 'Milford Track',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 15,
          walk_name: 'Rakiura Track',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 16,
          walk_name: 'Routeburn Track',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 17,
          walk_name: 'Tongariro Northern Circuit',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 18,
          walk_name: 'Whanganui Journey',
          description: '',
          coordinates: '',
          full_walk: false,
          pdf_url:''
        })
    ]);
});
};
