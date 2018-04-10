
let Dylans_map = L.map('Dylans_map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(Dylans_map);

let DylansCoordinates = ([
          {lat: 37.772, lng: -122.214},
          {lat: 21.291, lng: -157.821},
          {lat: -18.142, lng: 178.431},
          {lat: -27.467, lng: 153.027}
        ]);

let polyline = L.polyline({
          path: DylansCoordinates,
          geodesic: true,
          fillColor: 'red',
          fillOpacity: 1.0,
          strokeWeight: 2
        }).addTo(Dylans_map);

let marker = L.marker([51.5, -0.09]).addTo(Dylans_map);

let circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(Dylans_map);

let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(Dylans_map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
polyline.bindPopup("I am the polyline.");

let popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(Dylans_map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }

    Dylans_map.on('click', onMapClick);

    let popup2 = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(Dylans_map);
}

Dylans_map.on('click', onMapClick);
