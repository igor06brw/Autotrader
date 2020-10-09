import { Component, Input, OnInit } from '@angular/core';
import { MODELS } from '../base/models';
import { MANUFACTURES } from '../base/manufactures';


@Component({
  selector: 'car-card',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {
  @Input() car;

  models: Array<Object> = MODELS;
  manufactures: Array<Object> = MANUFACTURES;
  displayCar: Array<any>;
  nameOfModel: Object;
  titleOfManufacture: Object;

  constructor() {}

  changeToTitle(manufacture: any) {
    this.manufactures.forEach((e) => {
      for(const[key, value] of Object.entries(e)) {
        if(value == manufacture) {
          this.titleOfManufacture = e.title;
        }
      }
    })
  }

  findByModel(model: any) {
    this.models.forEach((e: any) => {
      if(e.hasOwnProperty(model)) {
        for(const[key, value] of Object.entries(e)) {
          if(key == model) {
            this.nameOfModel = value;
          }
        }
      }
    });
  }
  ngOnInit(): void {
    this.displayCar = this.car
    this.findByModel(this.displayCar.model);
    this.changeToTitle(this.displayCar.manufacture);
  }

}
