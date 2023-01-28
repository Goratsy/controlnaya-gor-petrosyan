import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarService } from 'src/app/service/car.service';
import ICar from 'src/app/service/model/ICar';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  Car: any;
  id: number;
  private subscription: Subscription;
  constructor(private route: ActivatedRoute, private carservice: CarService) {
    this.subscription = route.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
    this.Car = this.carservice.findTheCar(this.id);
    console.log(this.id);
    
  }

}
