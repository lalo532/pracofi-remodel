import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuaranteeComponent } from './components/guarantee/guarantee.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ContpaqiComponent } from './components/contpaqi/contpaqi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    HomeServicesComponent,
    FooterComponent,
    GuaranteeComponent,
    LandingPageComponent,
    ServicesPageComponent,
    ContpaqiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
