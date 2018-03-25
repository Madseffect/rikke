var map;
var lat;
var lng;
var pos={
    "lat":12,
    "lng":56
  };




function initMap() {

    getLocation();
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: pos.lat, lng:pos.lng},
        zoom: 8
    });
}
function getLocation(){
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position){

    lat = position.coords.latitude;
    lng = position.coords.longitude;
    map.setCenter(new google.maps.LatLng(lat,lng));
}
function addMarker( position) {
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
  }
  $(document).ready(function(){
      $('#addtrashcan').click(function(){
        var coordinates=$('#coordinates').val();
        coordinates=coordinates.split(',');  
        var position=new google.maps.LatLng(coordinates[0],coordinates[1]);
        addMarker(position);
    });
    
    $('#addtrashmylocation').click(function(){
        var position=new google.maps.LatLng(lat,lng);
        addMarker(position);
        
      });
  });