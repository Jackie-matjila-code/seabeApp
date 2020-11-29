import { Component, OnInit } from '@angular/core';
declare var mapboxgl; 
@Component({
  selector: 'app-malontone',
  templateUrl: './malontone.page.html',
  styleUrls: ['./malontone.page.scss'],
})
export class MalontonePage implements OnInit {

  constructor() {

   }

  ngOnInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF0amlsYXRqIiwiYSI6ImNraGtnamp5eTFrdXcycm1jamV2M282eGIifQ.gge0eb3bnscnAeqeVCuPbA';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
}); 
map.addControl(new mapboxgl.NavigationControl());

// Add geolocate control to the map.
map.addControl(
  new mapboxgl.GeolocateControl({
  positionOptions: {
  enableHighAccuracy: true
  },
  trackUserLocation: true
  })
  );
  }

}
