import { Component, OnInit } from '@angular/core';
declare var mapboxgl;
declare var L; 
@Component({
  selector: 'app-kgope',
  templateUrl: './kgope.page.html',
  styleUrls: ['./kgope.page.scss'],
})
export class KgopePage implements OnInit {

  constructor() { }

  ngOnInit() {
    var mymap = L.map('mapid').setView([-25.022573512799156, 28.69848952695503], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWF0amlsYXRqIiwiYSI6ImNraGtnamp5eTFrdXcycm1jamV2M282eGIifQ.gge0eb3bnscnAeqeVCuPbA'
}).addTo(mymap);

var marker = L.marker([-25.022573512799156, 28.69848952695503]).addTo(mymap);

var circle = L.circle([-25.022573512799156, 28.69848952695503], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
  }

}
