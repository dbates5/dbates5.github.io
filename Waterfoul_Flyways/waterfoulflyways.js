let map1 = L.map('Flyways').setView([39.8283, -98.5795], 4);

let USbasemap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map1);

let color_map = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let map2 = L.tileLayer(color_map);

let elevationmap =  L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map1);


let Basemaps = {
  'Color basemap': map2,
  'Black & White basemap': USbasemap,
	'Elevation Map' : elevationmap
};

let Controloptions = {
  collapsed: false
};

let operlayer = {}

L.control.layers(Basemaps, operlayer, Controloptions).addTo(map1);

let DuckIcon = L.icon({
	iconUrl: 'mallard.png',
	iconSize: [38, 95],
	shadowSize: [50, 64],
	iconAnchor: [22, 94],
	shadowAnchor: [4, 62],
	popupAnchor: [-3, -76]
});

let marker2 = L.marker([34.5004, -91.5526], { icon: DuckIcon }).addTo(map1);

function DucksUnlimited (feature) {
 let flyway = feature.properties["FLYWAY"]
 let flywaycolor = 'blue'
 if ( flyway == "Mississippi" ) { flywaycolor = 'Red' }
 if (flyway == "Central") {flywaycolor = 'Green'}
 if (flyway == "Atlantic") {flywaycolor = 'purple' }
 if (flyway == "Pacific") {flywaycolor =  'blue'}

 let RegionColor = {
	 color: flywaycolor,
	 weight: 1,
	 fillOpacity: 0.2
 }
 return RegionColor
}

function DuckPopup (feature, layer) {
  let name = feature.properties.FLYWAY
  layer.bindPopup('<h1>' + name + '</h1>')
}

let DuckOptions = {
  style: DucksUnlimited,
	onEachFeature: DuckPopup
}

L.geoJSON(Dylansflyways, DuckOptions).addTo(map1)

function DUareas (feature) {
	let focus = feature.properties["FOCUS_AREA"]
	let interestcolor = 'orange'
	if (focus == "Jamestown") {interestcolor = '#FF00CC'}
	if (focus == "Rainwater Basin") {interestcolor = '#FF00CC'}
	if (focus == "Platte River Flood Plain") {interestcolor = '#FF00CC' }
	if (focus == "Atlantic Rivers & Estuaries") {interestcolor = '#FF00CC' }
	if (focus == "Confluence") {interestcolor = '#FF00CC' }
	if (focus == "James River Lowlands") {interestcolor = '#FF00CC' }
	if (focus == "Lower Mississippi River Valley") {interestcolor = '#FF00CC' }
	if (focus == "Missouri Coteau") {interestcolor = '#FF00CC' }
	if (focus == "Prairie Coteau") {interestcolor = '#FF00CC' }
	if (focus == "North Puget Sound") {interestcolor = '#FF00CC' }
	if (focus == "South Carolina Lowcountry") {interestcolor = '#FF00CC' }
	if (focus == "Sacramento Valley") {interestcolor = '#FF00CC' }
	if (focus == "Living Lakes") {interestcolor = '#FF00CC' }

	let areaColor = {
 	 color: interestcolor,
 	 weight: 1,
 	 fillOpacity: 0.6
  }
  return areaColor
};

 function DUPopup (feature, layer) {
   let DUname = feature.properties.FOCUS_AREA
   layer.bindPopup('<h1>' + DUname + '</h1>')
 };

 let DUoptions = {
	 style: DUareas,
	 onEachFeature: DUPopup
 };


L.geoJSON(areas, DUoptions).addTo(map1)

let DUCoordinates = ([
          [30.4515, -91.1871],
          [30.9532, -92.1826]
        ]);

let Closepolyline = L.polyline(DUCoordinates,{
          geodesic: true,
          fillColor: 'blue',
          fillOpacity: 1.0,
          strokeWeight: 2
        }).addTo(map1);

let StuttgartAR = ([
	[34.739725, -92.285069],
	[35.131108, -90.032636],
	[34.193671, -90.574577]
]);

let StuttgartOptions = {
	color : 'Green',
	fillColor : 'Green',
	fillOpacity : .6

};

let ARpolygon = L.polygon(StuttgartAR, StuttgartOptions).addTo(map1);
