import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jazz-festival',
  templateUrl: './jazz-festival.component.html',
  styleUrls: ['./jazz-festival.component.scss']
})
export class JazzFestivalComponent {
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
  nextpage(){
    this.router.navigate(['/helvatica']);
  }
}
