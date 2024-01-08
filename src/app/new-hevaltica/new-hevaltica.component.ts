import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-hevaltica',
  templateUrl: './new-hevaltica.component.html',
  styleUrls: ['./new-hevaltica.component.scss']
})
export class NewHevalticaComponent {
  constructor(private router: Router) {}

  openHome(){
    this.router.navigate(['']);
  }
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
    this.router.navigate(['/jazzfestival']);
  }
  nextpage(){
    this.router.navigate(['/bookcover']);

  }
}
