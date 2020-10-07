import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { CarInterface } from '../models/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, CarInterface {
  manufacture?: String;
  model?: String;
  description?: String;
  price?: Number;
  year?: Number;
  mileage?: Number;
  imageMain?: String;
  imageFront?: String;
  imageBack?: String; 

  constructor(manufacture: String, model: String, description: String, price: Number, year: Number, mileage: Number, imageMain: String) {
      this.manufacture = manufacture;
      this.model = model;
      this.description = description;
      this.price = price;
      this.year = year;
      this.mileage = mileage;
      this.imageMain = imageMain;
  }

  ngOnInit(): void {
  }
}
