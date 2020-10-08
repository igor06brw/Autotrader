import { Component, Input, OnInit } from '@angular/core';
import { MODELS } from '../base/models';


@Component({
  selector: 'car-card',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {
  @Input() car;

  models: Array<Object> = MODELS;
  displayCar: Array<any>;
  nameOfModel: Object;

  constructor() {}

  findByModel(model: any) {
    this.models.forEach((e: any) => {
      if(e.hasOwnProperty(model)) {
        for(const[key, value] of Object.entries(e)) {
          if(key == model) {
            this.nameOfModel = value;
            console.log(this.nameOfModel);
          }
        }
      }
    });
  }


  // manufacture?: String;
  // model?: String;
  // description?: String;
  // price?: Number;
  // year?: Number;
  // mileage?: Number;
  // imageMain?: String;
  // imageFront?: String;
  // imageBack?: String; 

  // constructor(manufacture: String, model: String, description: String, price: Number, year: Number, mileage: Number, imageMain: String) {
  //     this.manufacture = manufacture;
  //     this.model = model;
  //     this.description = description;
  //     this.price = price;
  //     this.year = year;
  //     this.mileage = mileage;
  //     this.imageMain = imageMain;
  // }

  ngOnInit(): void {
    this.displayCar = this.car
    this.findByModel(this.displayCar.model);
  }

}
