import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { BrandingComponent } from './branding/branding.component';
import { UiuxComponent } from './uiux/uiux.component';
import { TypographyComponent } from './typography/typography.component';
import { BlenderbuddyComponent } from './blenderbuddy/blenderbuddy.component';
import { GetThriftyComponent } from './get-thrifty/get-thrifty.component';
import { CubicComponent } from './cubic/cubic.component';
import { NewHevalticaComponent } from './new-hevaltica/new-hevaltica.component';
import { JazzFestivalComponent } from './jazz-festival/jazz-festival.component';
import { BookCoverComponent } from './book-cover/book-cover.component';
import { WegmansComponent } from './wegmans/wegmans.component';
import { BathBodyComponent } from './bath-body/bath-body.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    BrandingComponent,
    UiuxComponent,
    TypographyComponent,
    BlenderbuddyComponent,
    GetThriftyComponent,
    CubicComponent,
    NewHevalticaComponent,
    JazzFestivalComponent,
    BookCoverComponent,
    WegmansComponent,
    BathBodyComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
