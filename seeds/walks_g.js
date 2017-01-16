
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('walks_general').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('walks_general').insert({
          id: 1,
          walk_name: 'Abel Tasman Coast Track',
          description: '60 km one way / 3 - 5 days / Intermediate',
          lat: -40.909,
          lng: 173.048,
          full_walk: true,
          pdf_url: './public/pdfs/abel-tasman.pdf'
        }),
        knex('walks_general').insert({
          id: 2,
          walk_name: 'Heaphy Track',
          description: '78.4 km one way / 4 - 6 days / Intermediate',
          lat: -40.886,
          lng: 172.303,
          full_walk: true,
          pdf_url: './public/pdfs/heaphy.pdf'
        }),
        knex('walks_general').insert({
          id: 3,
          walk_name: 'Kepler Track',
          description: '60 km loop / 3 - 4 days / Intermediate',
          lat: -45.451,
          lng: 167.575,
          full_walk: true,
          pdf_url: './public/pdfs/kepler.pdf'
        }),
        knex('walks_general').insert({
          id: 4,
          walk_name: 'Lake Waikaremoana',
          description: '46 km one way/ 3 - 4 days / Intermediate',
          lat: -38.801,
          lng: 177.115,
          full_walk: true,
          pdf_url: './public/pdfs/waikaremoana.pdf'
        }),
        knex('walks_general').insert({
          id: 5,
          walk_name: 'Milford Track',
          description: '53.5 km one way / 4 days / Intermediate',
          lat: -44.828,
          lng: 167.793,
          full_walk: true,
          pdf_url: './public/pdfs/milford.pdf'
        }),
        knex('walks_general').insert({
          id: 6,
          walk_name: 'Rakiura Track',
          description: '32 km loop / 3 days / Intermediate',
          lat: -46.684,
          lng: 167.868,
          full_walk: true,
          pdf_url: './public/pdfs/rakiura.pdf'
        }),
        knex('walks_general').insert({
          id: 7,
          walk_name: 'Routeburn Track',
          description: '32 km one way / 2 - 4 days / Intermediate',
          lat: -44.781,
          lng: 168.163,
          full_walk: true,
          pdf_url: './public/pdfs/routeburn.pdf'
        }),
        knex('walks_general').insert({
          id: 8,
          walk_name: 'Tongariro Northern Circuit',
          description: '43.1 km loop / 3-4 days / Intermediate',
          lat: -39.209,
          lng: 175.680,
          full_walk: true,
          pdf_url: './public/pdfs/tongariro.pdf'
        }),
        knex('walks_general').insert({
          id: 9,
          walk_name: 'Whanganui Journey',
          description: '87 or 145 km one way / 3 or 5 days / Kayaking and canoeing',
          lat: -39.209,
          lng: 175.680,
          full_walk: true,
          pdf_url: './public/pdfs/whanganui.pdf'
        }),
        knex('walks_general').insert({
          id: 10,
          walk_name: 'Abel Tasman Coast Track',
          description: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 11,
          walk_name: 'Heaphy Track',
          description: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 12,
          walk_name: 'Kepler Track',
          description: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 13,
          walk_name: 'Lake Waikaremoana',
          description: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 14,
          walk_name: 'Milford Track',
          description: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 15,
          walk_name: 'Rakiura Track',
          description: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 16,
          walk_name: 'Routeburn Track',
          description: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 17,
          walk_name: 'Tongariro Northern Circuit',
          description: '',
          full_walk: false,
          pdf_url:''
        }),
        knex('walks_general').insert({
          id: 18,
          walk_name: 'Whanganui Journey',
          description: '',
          full_walk: false,
          pdf_url:''
        })
    ]);
});
};
