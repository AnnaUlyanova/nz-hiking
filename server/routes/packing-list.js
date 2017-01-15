var express = require('express')

var db = require('../db')

var router = express.Router()

module.exports = router

router.get('/', function (req, res) {
  db.getpackItems()
    .then(function(items) {
      res.json({items: items})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
