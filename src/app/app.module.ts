import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AddToBagComponent } from './add-to-bag/add-to-bag.component';
import { MobileNavigationComponent } from './mobile-navigation/mobile-navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfilePageComponent } from './mobile-navigation/profile-page/profile-page.component';
import { NoPageComponent } from './mobile-navigation/no-page/no-page.component';
import { RouterOutlet } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MusicEventsComponent } from './music-events/music-events.component';
import { EventCardComponent } from './music-events/event-card/event-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    AddToBagComponent,
    MobileNavigationComponent,
    ProfilePageComponent,
    NoPageComponent,
    ContactUsComponent,
    RecipeComponent,
    CarouselComponent,
    CreateAccountComponent,
    MusicEventsComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
