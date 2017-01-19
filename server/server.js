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
//server.use(bodyParser.json())
server.use(cors())
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: "server/views/layouts/",
  partialsDir: "server/views/partials/"
}))

server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))


server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))


module.exports = server

//routes
server.get('/walk/:id', routes.getWalkById)
server.use('/full-walks', fullWalks)
server.use('/pdf', PDFs)
server.use('/activities', activities)
server.use('/packing-list', packItems)
