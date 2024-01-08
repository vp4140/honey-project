import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-thrifty',
  templateUrl: './get-thrifty.component.html',
  styleUrls: ['./get-thrifty.component.scss']
})
export class GetThriftyComponent {
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
  openHome(){
    this.router.navigate(['']);
  }
  previouspage(){
    this.router.navigate(['/blenderbuddy']);
  }
}
