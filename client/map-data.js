export function getMarkers () {
  return [
    ['Lake Waikaremoana', -38.801, 177.115],
    ['Milford Track', -44.828, 167.793],
    ['Abel Tasman Coast Track', -40.909, 173.048],
    ['Tongariro Northern Circuit', -39.209, 175.680],
    ['Whanganui Journey', -38.884, 175.280],
    ['Kepler Track', -45.451, 167.575],
    ['Heaphy Track', -40.886, 172.303],
    ['Routeburn Track', -44.781, 168.163],
    ['Rakiura Track', -46.684, 167.868]
  ]
}

// Info window content
export function getInfoWindowContent() {
  return [
      ['<div class="info_content">' +
      '<h3>' + markers[0][0] + '</h3>' +
      '<p>Track Description.</p>' + '</div>'],
      ['<div class="info_content">' +
      '<h3>' + markers[1][0] + '</h3>' +
      '<p>Track Description.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h3>' + markers[2][0] + '</h3>' +
      '<p>Track Description.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h3>' + markers[3][0] + '</h3>' +
      '<p>Track Description.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h3>' + markers[4][0] + '</h3>' +
      '<p>Track Description.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h3>' + markers[5][0] + '</h3>' +
      '<p>Track Description.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h3>' + markers[6][0] + '</h3>' +
      '<p>Track Description.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h3>' + markers[7][0] + '</h3>' +
      '<p>Track Description.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h3>' + markers[8][0] + '</h3>' +
      '<p>Track Description.</p>' +
      '</div>']
  ]
}
