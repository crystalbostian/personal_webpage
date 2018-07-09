import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CrystalComponent } from './crystal/crystal.component';
import { AddisonComponent } from './addison/addison.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'crystal', component: CrystalComponent },
  { path: 'addison', component: AddisonComponent },
  { path: 'crystal/Homepage', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addison/Homepage', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
