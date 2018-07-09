import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CrumbbarComponent } from './crumbbar/crumbbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { CrystalComponent } from './crystal/crystal.component';
import { AddisonComponent } from './addison/addison.component';
import { AboutCrystalComponent } from './crystal/about-crystal/about-crystal.component';
import { ProjectsCrystalComponent } from './crystal/projects-crystal/projects-crystal.component';
import { ContactCrystalComponent } from './crystal/contact-crystal/contact-crystal.component';

@NgModule({
  declarations: [
    AppComponent,
    CrumbbarComponent,
    HomepageComponent,
    CrystalComponent,
    AddisonComponent,
    AboutCrystalComponent,
    ProjectsCrystalComponent,
    ContactCrystalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
