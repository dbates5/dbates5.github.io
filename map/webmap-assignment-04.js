let Dylans_map3 = L.map('Dylans_map3').setView([51.505, -0.09], 13);

L.tileLayer('http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &amp; USGS'
}).addTo(Dylans_map3);

let DylansGeojson = {"type":"FeatureCollection"...}

L.geoJSON(DylansGeojson).addTo(Dylans_map3)


function DylStyle (feature) {
  let Alaska = feature.properties.AGE_20_24 // get the current state's Median Age attribute
  let stateColor = 'Blue' // let the initial color be a darker green
  if ( age < 22 ) { stateColor = 'purple' } // if the state's median age is less than the average, color it a lighter green
  let myStyle = {
    color: stateColor, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
  return myStyle
}

let DylOptions = {
  style: DylStyle,
  onEachFeature: DylPopup
}
function DylPopup (feature, layer) {
  let name = feature.properties.STATE_NAME
  let age = feature.properties.AGE_20_24
  layer.bindPopup('Age between 20 and 24 ' + name + ': ' + age + '<br>National average: 38')
}


L.geoJSON(DylansGeojson, DylOptions).addTo(Dylans_map3)
