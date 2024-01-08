import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  constructor(private router: Router) {}
  onSkillClick(section:string){
    this.router.navigate(['/skills'],{ fragment: section });
  }
  contactMe(){
    this.router.navigate(['/contact']);
  }
  work(){
    this.router.navigate(['/skills']);
  }

}
