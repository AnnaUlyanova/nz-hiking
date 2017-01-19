var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getMyWalk: getMyWalk,
  getMyActivities: getMyActivities,
  getMyItems: getMyItems,
  insertItem: insertItem,
  getFullWalks: getFullWalks,
  getPDFs: getPDFs,
  getActivities: getActivities,
  getpackItems: getpackItems
}


function getMyWalk (id) {
  var db = connection
  return db('walks_general')
    .where('id', id)
    .first()
}

function getMyActivities (id) {
  var db = connection
  return db('activities')
    .where('walk_id', id)
}

function getMyItems (id) {
  var db = connection
  return db('packing_list')
    .where('walk_id', id)
}

function insertItem (item) {
  var db = connection
  return db('packing_list')
    .insert({walk_id: item.walk_id, item: item.item})
}

//API functions

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
