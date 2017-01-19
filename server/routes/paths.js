var path = require('path')
var express = require('express')

var db = require('../db')

module.exports = {
  getWalkById: getWalkById,

}

function getWalkById (req, res) {
  db.getMyWalk(req.params.id)
    .then(function (walk) {
      db.getMyActivities(req.params.id)
        .then(function(activities) {
          let data = {
            title: "New Zealand hiking " + walk.walk_name,
            currentWalk: walk,
            activities: activities
          }
          res.render('walk', data)
        })
    })
    .catch(function (err) {
    res.status(500).send('Error: ' + err.message)
  })
}
