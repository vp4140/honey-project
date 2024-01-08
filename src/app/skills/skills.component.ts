import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, Subject } from 'rxjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @ViewChild('typographySection') typographySection!: ElementRef;
  @ViewChild('branding') branding!: ElementRef;
  @ViewChild('uiux') uiux!: ElementRef;
  private destroy$ = new Subject<void>();
  

  constructor(private el: ElementRef,private activatedRoute: ActivatedRoute, private renderer: Renderer2,private router: Router) {}

  openHome(){
    this.router.navigate(['']);
  }
ngOnInit(){
  console.log("I am here ");
  

}
contactMe(){
  this.router.navigate(['/contact']);
}

ngAfterViewInit() {
  this.activatedRoute.fragment.subscribe((fragment: any) => {
    this.scrollIntoView(fragment);
  });
}

scrollIntoView(section: string) {
  switch (section) {
    case 'typographySection':
      this.typographySection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
      break;
    case 'branding':
      this.branding.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
      break;
    case 'uiux':
      this.uiux.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
      break;
    // Add more cases for other sections if needed

    default:
      console.error(`Section '${section}' not recognized`);
      return;
  }
}




ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}
work(){
  this.router.navigate(['/skills']);
}
onDesignPortfolio(){
  this.router.navigate(['']);
}

}
