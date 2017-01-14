var express = require('express')

var db = require('./db')

var router = express.Router()

module.exports = router

router.get('/', function (req, res) {
  db.getFullWalks()
    .then(function (walks) {
      res.json({walks: walks })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
