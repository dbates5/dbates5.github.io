
let Dylans_map = L.map('Dylans_map').setView([51.505, -0.09], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(Dylans_map)

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

let popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(Dylans_map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }

    Dylans_map.on('click', onMapClick);

    let popup = L.bindPopup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(Dylans_map);
}

Dylans_map.on('click', onMapClick);
