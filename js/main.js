'use strict';

var markers = [
	{
		title: 'Poltava, Ukraine',
		lat: 49.568758,
		lng: 34.585413,
		icon: 'images/marker-1.png',
		info: 'Welcome to Poltava',
	}
];

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var center = {
  	lat: markers[0].lat, 
  	lng: markers[0].lng
  },
  map,
  marker,
  i,
  infowindow = new google.maps.InfoWindow;

  // The map, centered at Uluru
  map = new google.maps.Map(
      document.getElementById('map'), {
      	zoom: 10, 
      	center: center,
      	disableDefaultUI: true,
      	zoomControl: true
      });

  for ( i = 0; i < markers.length; i++) {
    marker = new google.maps.Marker({
    position: {lat: markers[i].lat, lng: markers[i].lng},
    map: map,
    icon: markers[i].icon,
    title: markers[i].title
    });


google.maps.event.addDomListener(window, "load", initMap);


(function($){
	$(document).ready(function() {
		// Code

});
})(jQuery);
