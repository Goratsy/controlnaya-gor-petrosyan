import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { isEmpty } from 'rxjs';
import ICar from './model/ICar';



@Injectable({
  providedIn: 'root'
})
export class CarService {
  Cars: ICar[] = [
    { id: 0, brandName: 'Volva', modelName: 'bigTrip', priceInRub: 5000000 },
    { id: 1, brandName: 'Mercides', modelName: 'largeCupe', priceInRub: 12395930 },
    { id: 2, brandName: 'Holtsvagen', modelName: 'Tiguan', priceInRub: 7003139 },
  ]

  get getCars(): ICar[] {
    return this.Cars;
  }

  setCars(Car: any) {
    this.Cars.push(Car);
    console.log(this.Cars, Car)
  }

  findTheCar(nameCar: number) {
    let indexCars2 = this.Cars.find((item, index) => {
      let obj = item.id == nameCar;
      return obj
    })
    return indexCars2;
  }
}
