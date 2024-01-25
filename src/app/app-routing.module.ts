import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'landing', component: LandingPageComponent},    
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
