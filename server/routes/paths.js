var path = require('path')
var express = require('express')

var db = require('../db')

module.exports = {
  getWalk1: getWalk1
}

function getWalk1 (req, res) {
  res.send("Walk 1")
}
