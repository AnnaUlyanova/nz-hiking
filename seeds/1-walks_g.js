
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
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/nelson-marlborough/abel-tasman-coast-track-brochure.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/tracks/abel-tasman-coast-track/#alert-panel'
        }),
        knex('walks_general').insert({
          id: 2,
          walk_name: 'Heaphy Track',
          description: '78.4 km one way / 4 - 6 days / Intermediate',
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/nelson-marlborough/heaphy-track-brochure.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/kahurangi-national-park/things-to-do/tracks/heaphy-track/#alert-panel'
        }),
        knex('walks_general').insert({
          id: 3,
          walk_name: 'Kepler Track',
          description: '60 km loop / 3 - 4 days / Intermediate',
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/southland/kepler-track-brochure.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/kepler-track/#alert-panel'
        }),
        knex('walks_general').insert({
          id: 4,
          walk_name: 'Lake Waikaremoana',
          description: '46 km one way/ 3 - 4 days / Intermediate',
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/east-coast-hawkes-bay/lake-waikaremoana-track.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/#alert-panel'
        }),
        knex('walks_general').insert({
          id: 5,
          walk_name: 'Milford Track',
          description: '53.5 km one way / 4 days / Intermediate',
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/southland/milford-track-brochure.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/#alert-panel'
        }),
        knex('walks_general').insert({
          id: 6,
          walk_name: 'Rakiura Track',
          description: '32 km loop / 3 days / Intermediate',
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/southland/rakiura-track-brochure.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/rakiura-national-park/things-to-do/rakiura-track/#alert-panel'
        }),
        knex('walks_general').insert({
          id: 7,
          walk_name: 'Routeburn Track',
          description: '32 km one way / 2 - 4 days / Intermediate',
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/southland/routeburn-track-brochure.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/#alert-panel'
        }),
        knex('walks_general').insert({
          id: 8,
          walk_name: 'Tongariro Northern Circuit',
          description: '43.1 km loop / 3-4 days / Intermediate',
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/tongariro-taupo/tongariro-circuit-brochure.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/#alert-panel'
        }),
        knex('walks_general').insert({
          id: 9,
          walk_name: 'Whanganui Journey',
          description: '87 or 145 km one way / 3 or 5 days / Kayaking and canoeing',
          full_walk: true,
          pdf_url: 'http://www.doc.govt.nz/Documents/parks-and-recreation/tracks-and-walks/wanganui/whanganui-journey-brochure.pdf',
          alerts: 'https://www.doc.govt.nz/parks-and-recreation/places-to-go/manawatu-whanganui/places/whanganui-national-park/things-to-do/tracks/whanganui-journey/#alert-panel'
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
