import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    AboutMeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
