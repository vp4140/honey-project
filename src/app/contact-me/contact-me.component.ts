import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  constructor(private router: Router) {}
  onDesignPortfolio(){
    this.router.navigate(['']);
  }
  work(){
    this.router.navigate(['/skills']);
  }
}
