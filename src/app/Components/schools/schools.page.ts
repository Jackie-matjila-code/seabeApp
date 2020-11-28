import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.page.html',
  styleUrls: ['./schools.page.scss'],
})
export class SchoolsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goMalontone(){
    this.router.navigateByUrl('malontone');
  }
  goMadiboane(){
    this.router.navigateByUrl('madiboane');
  }
  goMadimo(){
    this.router.navigateByUrl('mmadimo');
  }
  goKgope(){
    this.router.navigateByUrl('kgope');
  }
  goRamoshidi(){
    this.router.navigateByUrl('ramoshidi');
  }
  goSeabe(){
    this.router.navigateByUrl('seabe');
  }
}
