var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

var fullWalks = require('./routes')

// Middleware
server.use(bodyParser.json())


module.exports = server

//routes
server.use('/full-walks', fullWalks)
