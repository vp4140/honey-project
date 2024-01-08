import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
  constructor(private router: Router) {}

  ontypo1click(){
    this.router.navigate(['/helvatica']);
  }
  ontypo3click(){
    this.router.navigate(['/jazzfestival']);
  }
  ontypo2click(){
    this.router.navigate(['/cubic']);
  }
  ontypo4click(){
    this.router.navigate(['/bookcover']);
  }

}
