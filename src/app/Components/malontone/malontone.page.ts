import { Component, OnInit } from '@angular/core';
declare var mapboxgl;
declare var L; 
@Component({
  selector: 'app-malontone',
  templateUrl: './malontone.page.html',
  styleUrls: ['./malontone.page.scss'],
})
export class MalontonePage implements OnInit {

  constructor() {

   }

  ngOnInit() {
    var mymap = L.map('mapid').setView([-25.003126246448858, 28.68148218430291], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWF0amlsYXRqIiwiYSI6ImNraGtnamp5eTFrdXcycm1jamV2M282eGIifQ.gge0eb3bnscnAeqeVCuPbA'
}).addTo(mymap);

var marker = L.marker([-25.003126246448858, 28.68148218430291]).addTo(mymap);

var circle = L.circle([-25.003126246448858, 28.68148218430291], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);
  }

}
