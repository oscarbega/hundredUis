import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AddToBagComponent } from './add-to-bag/add-to-bag.component';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilePageComponent } from './mobile-navigation/profile-page/profile-page.component';
import { NoPageComponent } from './mobile-navigation/no-page/no-page.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    AddToBagComponent,
    MobileNavigationComponent,
    ProfilePageComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
