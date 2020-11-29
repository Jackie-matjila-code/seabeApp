import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  } 

card1(){
 this.router.navigateByUrl('tabs/jobs')
}
card2(){
  this.router.navigateByUrl('tabs/schools')
 }
 card3(){
  this.router.navigateByUrl('tabs/business')
 }
 card4(){
  this.router.navigateByUrl('tabs/moghozi')
 }
 card5(){
  this.router.navigateByUrl('tabs/news')
 }
}
