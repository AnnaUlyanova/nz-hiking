const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const Handlebars = require('handlebars')
const cors = require('cors')

const server = express()
const routes = require('./routes/paths')

const fullWalks = require('./routes/fullwalks')
const PDFs = require('./routes/pdfs')
const activities = require('./routes/activities')
const packItems = require('./routes/packing-list')

// Middleware
server.use(bodyParser.json())
server.use(cors())


module.exports = server

//routes
server.get('/walk/1', routes.getWalk1)
server.use('/full-walks', fullWalks)
server.use('/pdf', PDFs)
server.use('/activities', activities)
server.use('/packing-list', packItems)
