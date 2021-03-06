import { Component, Input, OnInit } from '@angular/core';
import { MODELS } from '../base/models';
import { MANUFACTURES } from '../base/manufactures';
import { ActivatedRoute } from '@angular/router';
import { SearchCarsService } from '../services/search-cars.service';


@Component({
  selector: 'car-card',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit {
  @Input() car: any;

  models: Array<Object> = MODELS;
  manufactures: Array<Object> = MANUFACTURES;
  displayCar: any;
  nameOfModel: Object;
  titleOfManufacture: String;
   show = true;
 

  constructor() {}


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
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      }, 0);
    }, 4000);
  }

}
