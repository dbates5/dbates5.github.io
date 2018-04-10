let Dylans_map3 = L.map('Dylans_map3').setView([39.8283, -98.5795], 4);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme',
	minZoom: 1,
	maxZoom: 11
}).addTo(Dylans_map3);


 function DylStyle (feature) {
  let female = feature.properties["FEMALES"] // get the current state's Median Age attribute
	let males = feature.properties["MALES"]
	let stateColor = 'Blue' // let the initial color be a darker green
  if ( males < female ) { stateColor = 'Red' } // if the state's median age is less than the average, color it a lighter green
  let DylStyle = {
    color: stateColor, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
  return DylStyle
}

let DylOptions = {
  style: DylStyle,
  onEachFeature: DylPopup
}

function DylPopup (feature, layer) {
  let name = feature.properties.STATE_NAME
  let males = feature.properties["MALES"]
	let females = feature.properties["FEMALES"]
	let gender = "MALES"
  if ( males < females ) {  gender = "FEMALE" }
  layer.bindPopup('The most popular gender of  ' + name + '  is  ' + gender )
}

L.geoJSON(dylangeojson, DylOptions).addTo(Dylans_map3)
