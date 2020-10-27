import { Component, OnInit } from '@angular/core';
import { CAR_COLLECTION } from '../models/cars.collection';

@Component({
  selector: 'app-random-cars',
  templateUrl: './random-cars.component.html',
  styleUrls: ['./random-cars.component.scss']
})
export class RandomCarsComponent implements OnInit {

  cars: any = CAR_COLLECTION;
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.cars);
  }

}
