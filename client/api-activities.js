var request = require('superagent')

var url = 'http://localhost:3000/activities'

module.exports = {
  getActivities: getActivities
}

function getUsers (callback) {
  request.get(url)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        var activities = res.body.activities.map(function (activity) {
          activity.description = res.body.activities.description
          return activity
        })
        callback(null, users)
      }
    })
}
