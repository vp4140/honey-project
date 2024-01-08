import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wegmans',
  templateUrl: './wegmans.component.html',
  styleUrls: ['./wegmans.component.scss']
})
export class WegmansComponent {
  constructor(private router: Router) {}



  onDesignPortfolio(){
    this.router.navigate(['']);
  }
  contactMe(){
    this.router.navigate(['/contact']);
  }
   work(){
    this.router.navigate(['/skills']);
  }
  previouspage(){
    this.router.navigate(['/bathbody']);
  }
}
