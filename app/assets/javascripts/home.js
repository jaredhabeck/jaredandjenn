function initialize() {
  var myLatlng = new google.maps.LatLng(38.5101618,-122.4795705);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeControl: false,
    overviewMapControl: false,
    streetViewControl: false,
    zoomControl: false,
  }
  var map = new google.maps.Map(document.getElementById('reception-map'), mapOptions);

  var contentString = '<div id="gmap-content">'+
    '<div id="gmap-siteNotice">'+
    '</div>'+
    '<strong><a href="http://maps.google.com/maps?saddr=2000+Main+Street,+Saint+Helena,+CA+94574" title="Get Driving Directions" target="_blank">Get Directions</a></strong><br>'+
    '</p>'
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      clickable: true,
      title: 'Beringer'
  });

  jQuery(function() {
    map.setZoom(8);
  })

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

$(document).ready(function() {
  $('#nav').affix({
    offset: {
      top: $('.header').height()
    }
  });

  google.maps.event.addDomListener(window, 'load', initialize);

  var $myGroup = $('.hotel-group');
  $myGroup.on('show','.collapse', function() {
    console.log('showing');
    $myGroup.find('.collapse.in').collapse('hide');
  });
});

