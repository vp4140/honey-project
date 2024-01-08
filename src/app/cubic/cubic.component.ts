import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cubic',
  templateUrl: './cubic.component.html',
  styleUrls: ['./cubic.component.scss']
})
export class CubicComponent {
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
    this.router.navigate(['/bookcover']);
  }
}
