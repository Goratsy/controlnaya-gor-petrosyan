import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {redirectTo: 'home', path: '', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'car/:id', component: CarComponent},
  {path: 'carAdd', component: AddCarComponent},
  {path: 'aboutme', component: AboutMeComponent},
  {path: '**', component:  NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
