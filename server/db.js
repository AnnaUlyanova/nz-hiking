var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getFullWalks: getFullWalks
}

function getFullWalks() {
  var db = connection
  return db('walks_general')
    .where('full_walk', true)
}
