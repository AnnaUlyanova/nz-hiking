var express = require('express')

var db = require('../db')

var router = express.Router()

module.exports = router

router.get('/', function (req, res) {
  db.getPDFs()
    .then(function(pdfs) {
      res.json({pdfs: pdfs})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
