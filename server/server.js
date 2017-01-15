const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

const fullWalks = require('./routes/fullwalks')
const PDFs = require('./routes/pdfs')
const activities = require('./routes/activities')
const packItems = require('./routes/packing-list')

// Middleware
server.use(bodyParser.json())


module.exports = server

//routes
server.use('/full-walks', fullWalks)
server.use('/pdf', PDFs)
server.use('/activities', activities)
server.use('/packing-list', packItems)