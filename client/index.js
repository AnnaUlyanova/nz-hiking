import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


import App from './components/App'
import Body from './components/Body'
import Map from './components/Map'
import Notes from './components/Notes'
import Photos from './components/Photos'
import About from './components/About'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history = {hashHistory}>
        <Route path='/' component={ App } >
          <Route component={ Body }>
            <IndexRoute component={ Map} />
            <Route path='my-notes' component = { Notes } />
            <Route path='photo-gallery' component = { Photos } />
            <Route path='about' component = { About } />
          </Route>
        </Route>
      </Router>
    ),

    document.getElementById('app')
  )
})

//window Object makes the function global
window.initMap = function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'terrain',
        center: {lat: -40.909, lng: 173.048}
    };

    // Display a map on the web page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(50);

    // Multiple markers location, latitude, and longitude
    var markers = [
    ['Lake Waikaremoana', -38.714, 177.051],
    ['Milford Track', -44.828, 167.793],
    ['Abel Tasman Coast Track', -40.909, 173.048],
    ['Tongariro Northern Circuit', -39.209, 175.680],
    ['Whanganui Journey', -38.884, 175.280],
    ['Kepler Track', -45.451, 167.575],
    ['Heaphy Track', -40.886, 172.303],
    ['Routeburn Track', -44.781, 168.163],
    ['Rakiura Track', -46.684, 167.868]
  ]

    // Info window content
    var infoWindowContent =[
    ['<div class="info_content">' +
    '<h3>' + markers[0][0] + '</h3>' +
    '<p>46 km one way/ 3 - 4 days / Intermediate.</p> <a href="/walk/4">Learn more...</a>' + '</div>'],
    ['<div class="info_content">' +
    '<h3>' + markers[1][0] + '</h3>' +
    '<p>53.5 km one way / 4 days / Intermediate.</p> <a href="/walk/5">Learn more...</a>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>' + markers[2][0] + '</h3>' +
    '<p>60 km one way / 3 - 5 days / Intermediate.</p> <a href="/walk/1">Learn more...</a>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>' + markers[3][0] + '</h3>' +
    '<p>43.1 km loop / 3-4 days / Intermediate.</p> <a href="/walk/8">Learn more...</a>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>' + markers[4][0] + '</h3>' +
    '<p>87 or 145 km one way / 3 or 5 days / Kayaking and canoeing.</p> <a href="http://localhost:3000/walk/9">Learn more...</a>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>' + markers[5][0] + '</h3>' +
    '<p>60 km loop / 3 - 4 days / Intermediate.</p> <a href="/walk/3">Learn more...</a>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>' + markers[6][0] + '</h3>' +
    '<p>78.4 km one way / 4 - 6 days / Intermediate.</p> <a href="/walk/2">Learn more...</a>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>' + markers[7][0] + '</h3>' +
    '<p>32 km one way / 2 - 4 days / Intermediate.</p> <a href="/walk/7">Learn more...</a>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h3>' + markers[8][0] + '</h3>' +
    '<p>32 km loop / 3 days / Intermediate.</p> <a href="/walk/6">Learn more...</a>' +
    '</div>']
]

    // Add multiple markers to map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Place each marker on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });


        // Add info window to marker
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Center the map to fit all markers on the screen
        map.fitBounds(bounds);
    }

    // Set zoom level
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(6);
        google.maps.event.removeListener(boundsListener);
    });

}
// Load initialize function
google.maps.event.addDomListener(window, 'load', initMap);
