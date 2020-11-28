import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goLearnership(){
    this.router.navigateByUrl('learnerships');
  }
  goInternship(){
    this.router.navigateByUrl('internships');
  }
  goEntry(){
    this.router.navigateByUrl('entry');
  }
}
