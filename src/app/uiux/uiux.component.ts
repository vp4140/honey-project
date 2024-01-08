import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uiux',
  templateUrl: './uiux.component.html',
  styleUrls: ['./uiux.component.scss']
})
export class UiuxComponent {
  constructor(private router: Router) {}

  onbrand1click(){
    this.router.navigate(['/blenderbuddy']);
  }
  onbrand2click(){
    this.router.navigate(['/thrifty']);
  }

}
