import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.page.html',
  styleUrls: ['./sport.page.scss'],
})
export class SportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goSoccer(){
    this.router.navigateByUrl('soccer');
  }
  goRudby(){
    this.router.navigateByUrl('rudby');
  }
  goTennis(){
    this.router.navigateByUrl('tennis');
  }
}
