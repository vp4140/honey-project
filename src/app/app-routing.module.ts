import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BathBodyComponent } from './bath-body/bath-body.component';
import { BlenderbuddyComponent } from './blenderbuddy/blenderbuddy.component';
import { BookCoverComponent } from './book-cover/book-cover.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CubicComponent } from './cubic/cubic.component';
import { GetThriftyComponent } from './get-thrifty/get-thrifty.component';
import { HomeComponent } from './home/home.component';
import { JazzFestivalComponent } from './jazz-festival/jazz-festival.component';
import { NewHevalticaComponent } from './new-hevaltica/new-hevaltica.component';
import { SkillsComponent } from './skills/skills.component';
import { WegmansComponent } from './wegmans/wegmans.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'blenderbuddy', component: BlenderbuddyComponent },
  { path: 'thrifty', component: GetThriftyComponent },
  { path: 'helvatica', component: NewHevalticaComponent },
  { path: 'jazzfestival', component: JazzFestivalComponent },
  { path: 'cubic', component: CubicComponent },
  { path: 'bookcover', component: BookCoverComponent },
  { path: 'wegmans', component: WegmansComponent },
  { path: 'bathbody', component: BathBodyComponent },
  { path: 'contact', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
