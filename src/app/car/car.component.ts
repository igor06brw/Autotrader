import { Component, Input, OnInit } from '@angular/core';
import { MODELS } from '../base/models';
import { MANUFACTURES } from '../base/manufactures';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'car-card',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {
  @Input() car;
  titleId: Number;

  models: Array<Object> = MODELS;
  manufactures: Array<Object> = MANUFACTURES;
  displayCar: any;
  nameOfModel: Object;
  titleOfManufacture: String;

  constructor(private route: ActivatedRoute) {}

  changeToTitle(manufacture: any) {
    this.manufactures.forEach((e: any) => {
      for(const[key, value] of Object.entries(e)) {
        if(value == manufacture) {
          return this.titleOfManufacture = e.title;
        }
      }
    })
  }

  findByModel(model: any) {
    this.models.forEach((e: any) => {
      if(e.hasOwnProperty(model)) {
        for(const[key, value] of Object.entries(e)) {
          if(key == model) {
            return this.nameOfModel = value;
          }
        }
      }
    });
    
  }
  ngOnInit(): void {
    this.displayCar = this.car
    this.findByModel(this.displayCar.model);
    this.changeToTitle(this.displayCar.manufacture);
    this.titleId =+ this.route.snapshot.paramMap.get('id');
  }

}
