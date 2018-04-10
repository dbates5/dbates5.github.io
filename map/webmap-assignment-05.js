let Dylans_map4 = L.map('Dylans_map4').setView([39.8283, -98.5795], 4);

let USbasemap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(Dylans_map4);

let blackandwhiteUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let newBasemap = L.tileLayer(blackandwhiteUrl)

let contourUrl = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(Dylans_map4);

let DylansBasemaps = {
  'Color basemap': newBasemap,
  'Black & White basemap': USbasemap,
  'Contour basemap' : contourUrl
}

let dylansControloptions = {
  collapsed: false
}

let operlayer = {}

L.control.layers(DylansBasemaps, operlayer, dylansControloptions).addTo(Dylans_map4)
