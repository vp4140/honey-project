import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bath-body',
  templateUrl: './bath-body.component.html',
  styleUrls: ['./bath-body.component.scss']
})
export class BathBodyComponent {
  constructor(private router: Router) {}


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
    this.router.navigate(['/wegmans']);
  }
}
