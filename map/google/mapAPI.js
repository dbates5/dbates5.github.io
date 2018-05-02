function initMap() {
    let coords = {lat: 30.9843, lng: -91.9623};
    var LAmap = new google.maps.Map(document.getElementById('LA_API'), {
      zoom: 5,
      center: coords,
      mapTypeId: 'satellite'
    });
    var marker = new google.maps.Marker({
      position: coords,
      map: LAmap
    });
  }
