import { Injectable } from '@angular/core';
import { allModelsOfCars } from '../base/models';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  model: any = allModelsOfCars;
  modelOfCar: any = allModelsOfCars;

  constructor() { 
  }



  choicedManufacture(value: String) {
    switch (value) {
      case "audi": {
        this.model[0];
        console.log(this.model[0]);
        break;
      }
      case "bmw": {
        this.model[1];
        console.log(this.model[1]);
        break;
      }
    }
  }
}
