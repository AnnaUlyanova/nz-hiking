var path = require('path')
var express = require('express')

var db = require('../db')

module.exports = {
  getWalkById: getWalkById,
  postItem: postItem
}

function getWalkById (req, res) {
  db.getMyWalk(req.params.id)
    .then(function (walk) {
      db.getMyActivities(req.params.id)
        .then(function(activity) {
          db.getMyItems(req.params.id)
          .then(function(item) {
            let data = {
              currentWalk: walk,
              activities: activity,
              items: item
            }
            res.render('walk', data)
          })
          })
        }
    )
    .catch(function (err) {
    res.status(500).send('Error: ' + err.message)
  })
}

function postItem (req, res) {
  let id = Number(req.body.id)
  var item = {
      walk_id: Number(req.body.id),
      item: req.body.itemname
    }
    db.insertItem(item)
      .then(function() {
        res.redirect('/walk/' + id)
      })
      .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
