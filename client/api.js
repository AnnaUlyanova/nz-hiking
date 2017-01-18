var request = require('superagent')

module.exports = {
  getWalks: getWalks,
  getActivities: getActivities
}

function getWalks (callback) {
  var url = "http://localhost:3000/full-walks"
  request.get(url)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body.walks)
      }
    })
}

function getActivities (callback) {
  var url = "http://localhost:3000/activities"
  request.get(url)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body.activities)
      }
    })
}
