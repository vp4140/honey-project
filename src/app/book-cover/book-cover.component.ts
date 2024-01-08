import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-cover',
  templateUrl: './book-cover.component.html',
  styleUrls: ['./book-cover.component.scss']
})
export class BookCoverComponent {
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
    this.router.navigate(['/helvatica']);
  }
  nextpage(){
    this.router.navigate(['/cubic']);

  }
}
