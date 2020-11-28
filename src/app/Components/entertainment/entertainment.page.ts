import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goEvents(){
    this.router.navigateByUrl('events');
  }
  goDj(){
    this.router.navigateByUrl('djs');
  }
}
