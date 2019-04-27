import { Component, OnInit } from '@angular/core';


declare var $: any;
declare var google: any;





@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() {

    

    $(function () {
      
      function initMap() {

        var location = {lat:4.64213514467333,lng: -74.10309157334268};
        var location2 = {lat:4.676733537817952, lng:-74.04833258329707};
        var location3 = {lat:4.669488252643546, lng:-74.05205447687942};
        var location4 = {lat:4.682912744592215, lng:-74.05508461718252};
        var location5 = {lat:4.704724091371759, lng:-74.0320276417249};

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
          center: {lat:4.650027632425733,lng:-74.07747038370722},
          zoom: 12,
          panControl: false,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'https://i.imgur.com/PMrR7bk.png';

        var marker = new google.maps.Marker({
          position: location, 
          map: map,
          icon: markerImage
        });
        var marker2 = new google.maps.Marker({
          position: location2, 
          map: map,
          icon: markerImage
        });
        var marker3 = new google.maps.Marker({
          position: location3, 
          map: map,
          icon: markerImage
        });
        var marker4 = new google.maps.Marker({
          position: location4, 
          map: map,
          icon: markerImage
        });
        var marker5 = new google.maps.Marker({
          position: location5, 
          map: map,
          icon: markerImage
        });


        var contentString = '<div class="info-window">' +
          '<h3>Biking Bogotá</h3>' +
          '<div class="info-content">' +
          '<p>Con opciones de 4hs y 8hs es la opción perfecta si estás en una conexión aérea o simplemente tienes unas pocas horas para conocer la ciudad, además, somos la oficina de alquiler más cercana a lugares como el Aeropuerto ElDorado o el Parque Simón Bolívar. ' +
          '</div>' +
          '</div>';

          var contentString2 = '<div class="info-window">' +
          '<h3>Grin</h3>' +
          '<div class="info-content">' +
          '<p>Creemos que la unión hace la fuerza, es por eso que buscamos que nuestra comunidad crezca y se mantenga unida mediante una comunicación constante.' +
          '</div>' +
          '</div>';
          var contentString3 = '<div class="info-window">' +
          '<h3>Muvo</h3>' +
          '<div class="info-content">' +
          '<p>Creemos que la unión hace la fuerza, es por eso que buscamos que nuestra comunidad crezca y se mantenga unida mediante una comunicación constante.' +
          '</div>' +
          '</div>';


        var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 400
        });

        var infowindow2 = new google.maps.InfoWindow({
          content: contentString2,
          maxWidth: 400
        });
        var infowindow3 = new google.maps.InfoWindow({
          content: contentString3,
          maxWidth: 400
        });

        

        marker.addListener('click', function () {
          infowindow.open(map, marker);
        });
        marker2.addListener('click', function () {
          infowindow2.open(map, marker2);
        });
        marker3.addListener('click', function () {
          infowindow3.open(map, marker3);
        });
        marker4.addListener('click', function () {
          infowindow3.open(map, marker4);
        });
        marker5.addListener('click', function () {
          infowindow3.open(map, marker5);
        });
        

        var styles = [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }];

        map.set('styles', styles);


      }

      google.maps.event.addDomListener(window, 'load', initMap);
    });
  }

  ngOnInit() {
  }








}
