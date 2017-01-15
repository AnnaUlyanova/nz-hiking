var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getFullWalks: getFullWalks,
  getPDFs: getPDFs,
  getActivities: getActivities,
  getpackItems: getpackItems
}

function getFullWalks() {
  var db = connection
  return db('walks_general')
    .where('full_walk', true)
}

function getPDFs() {
  var db = connection
  return db('walks_general')
    .where('full_walk', true)
    .select('pdf_url')
}

function getActivities() {
  var db = connection
  return db('activities')
}

function getpackItems() {
  var db = connection
  return db('packing_list')
}
