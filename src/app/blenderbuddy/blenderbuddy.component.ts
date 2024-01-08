import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blenderbuddy',
  templateUrl: './blenderbuddy.component.html',
  styleUrls: ['./blenderbuddy.component.scss']
})
export class BlenderbuddyComponent {
  constructor(private router: Router) {}

  openHome(){
    this.router.navigate(['']);
  }
  contactMe(){
    this.router.navigate(['/contact']);
  }
  onDesignPortfolio(){
    this.router.navigate(['']);
  }
  work(){
    this.router.navigate(['/skills']);
  }
  nextpage(){
    this.router.navigate(['/thrifty']);
  }
}
