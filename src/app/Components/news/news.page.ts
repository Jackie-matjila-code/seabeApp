import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goSport(){
    this.router.navigateByUrl('sport');
  }
  goEntertainment(){
    this.router.navigateByUrl('entertainment');
  }
  goHeadlines(){
    this.router.navigateByUrl('headlines');
  }
  goBusiness(){
    this.router.navigateByUrl('businesses');
  }
  goPolitics(){
    this.router.navigateByUrl('politics');
  }
}
