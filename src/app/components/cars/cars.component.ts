import { Component, Input, OnInit } from '@angular/core';
import { CarService } from 'src/app/service/car.service';
import ICar from 'src/app/service/model/ICar';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private carService: CarService) { }
  
  Cars: ICar[] = this.carService.getCars;

  ngOnInit(): void {
    console.log(this.Cars);
    
  }


}
