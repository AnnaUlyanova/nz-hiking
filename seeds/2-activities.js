
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
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/'}),
        knex('activities').insert({
          id: 2,
          walk_id: 4,
          description: 'Hinerau Walk',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/'}),
        knex('activities').insert({
          id: 3,
          walk_id: 4,
          description: 'Aniwaniwa Falls Track',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/'}),
        knex('activities').insert({
          id: 4,
          walk_id: '4',
          description: 'Papakorito Falls',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/'}),
        knex('activities').insert({
          id: 5,
          walk_id: 1,
          description: 'Cascade Falls',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/tracks/abel-tasman-coast-track/'}),
        knex('activities').insert({
          id: 6,
          walk_id: 1,
          description: 'Awaroa Beach',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/tracks/abel-tasman-coast-track/'}),
        knex('activities').insert({
          id: 7,
          walk_id: 1,
          description: 'Cleopatras Pool',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/tracks/abel-tasman-coast-track/'}),
        knex('activities').insert({
          id: 8,
          walk_id: 1,
          description: 'Kayaking between the bays',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/abel-tasman-national-park/things-to-do/tracks/abel-tasman-coast-track/'}),
        knex('activities').insert({
          id: 9,
          walk_id: 2,
          description: 'Mountain bike the track in the winter season',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/kahurangi-national-park/things-to-do/tracks/heaphy-track/'}),
        knex('activities').insert({
          id: 10,
          walk_id: 2,
          description: 'Flanagans Corner',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/kahurangi-national-park/things-to-do/tracks/heaphy-track/'}),
        knex('activities').insert({
          id: 11,
          walk_id: 2,
          description: 'The \‘enchanted forest\’',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/nelson-tasman/places/kahurangi-national-park/things-to-do/tracks/heaphy-track/'}),
        knex('activities').insert({
          id: 12,
          walk_id: 3,
          description: 'Iris Burn Waterfall',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/kepler-track/'}),
        knex('activities').insert({
          id: 13,
          walk_id: 3,
          description: 'Luxmore Cave',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/kepler-track/'}),
        knex('activities').insert({
          id: 14,
          walk_id: 5,
          description: 'Sutherland Falls',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/'}),
        knex('activities').insert({
          id: 15,
          walk_id: 5,
          description: 'Giants Gate Falls',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/'}),
        knex('activities').insert({
          id: 16,
          walk_id: 5,
          description: 'Andersons Cascade',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/'}),
        knex('activities').insert({
          id: 17,
          walk_id: 5,
          description: 'Pompolona ice field',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/'}),
        knex('activities').insert({
          id: 18,
          walk_id: 5,
          description: 'Emerald waters of the Clinton River',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/'}),
        knex('activities').insert({
          id: 19,
          walk_id: 6,
          description: ' Ulva Island/Te Wharawhara',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/rakiura-national-park/things-to-do/rakiura-track/'}),
        knex('activities').insert({
          id: 20,
          walk_id: 6,
          description: 'Port William/Potirepo',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/rakiura-national-park/things-to-do/rakiura-track/'}),
        knex('activities').insert({
          id: 21,
          walk_id: 6,
          description: 'Maori Beach',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/rakiura-national-park/things-to-do/rakiura-track/'}),
        knex('activities').insert({
          id: 22,
          walk_id: 6,
          description: 'Paterson Inlet/Whaka a Te Wera',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/southland/places/stewart-island-rakiura/rakiura-national-park/things-to-do/rakiura-track/'}),
        knex('activities').insert({
          id: 23,
          walk_id: 7,
          description: 'Bridal Veil Waterfall',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/'}),
        knex('activities').insert({
          id: 24,
          walk_id: 7,
          description: 'Humboldt Mountains',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/'}),
        knex('activities').insert({
          id: 25,
          walk_id: 7,
          description: 'Lake Mackenzie',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/'}),
        knex('activities').insert({
          id: 26,
          walk_id: 7,
          description: 'Darran Mountains',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/routeburn-track/'}),
        knex('activities').insert({
          id: 27,
          walk_id: 8,
          description: 'Taranaki Falls',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/'}),
        knex('activities').insert({
          id: 28,
          walk_id: 8,
          description: 'Mt Tongariro Summit',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/'}),
        knex('activities').insert({
          id: 29,
          walk_id: 8,
          description: 'Tama Lakes',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/'}),
        knex('activities').insert({
          id: 30,
          walk_id: 8,
          description: 'Emerald Lakes',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/'}),
        knex('activities').insert({
          id: 31,
          walk_id: 8,
          description: 'Blue Lake',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/central-north-island/places/tongariro-national-park/things-to-do/tracks/tongariro-northern-circuit/'}),
        knex('activities').insert({
          id: 32,
          walk_id: 9,
          description: 'Ohura River and Falls',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/manawatu-whanganui/places/whanganui-national-park/things-to-do/tracks/whanganui-journey/'}),
        knex('activities').insert({
          id: 33,
          walk_id: 9,
          description: 'Tamatea’s Cave',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/manawatu-whanganui/places/whanganui-national-park/things-to-do/tracks/whanganui-journey/'}),
        knex('activities').insert({
          id: 34,
          walk_id: 9,
          description: 'The Bridge to Nowhere',
          url: 'http://www.doc.govt.nz/parks-and-recreation/places-to-go/manawatu-whanganui/places/whanganui-national-park/things-to-do/tracks/whanganui-journey/'})
      ]);
    });
};
