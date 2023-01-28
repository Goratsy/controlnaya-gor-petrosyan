import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from 'src/app/service/car.service';
import ICar from 'src/app/service/model/ICar';
import { CarsComponent } from '../cars/cars.component';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  constructor(private carservice: CarService, private route: Router) { }


  formCar = new FormGroup({
    brandName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    modelName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    priceInRub: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)])
  })

  formSubmit() {
    let Car: ICar = {
      id: Date.now(),
      brandName: this.formCar.value.brandName,
      modelName: this.formCar.value.modelName,
      priceInRub: Number(this.formCar.value.priceInRub),
    }
    this.carservice.setCars(Car);
    this.route.navigate([''])
  }



  ngOnInit(): void {
  }

}
