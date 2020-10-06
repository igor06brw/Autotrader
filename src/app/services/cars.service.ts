import { Injectable } from '@angular/core';
import { allModelsOfCars } from '../base/models';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  model: any = allModelsOfCars;

  constructor() { 
  }



  choicedManufacture(value: String) {
    switch (value) {
      case "audi": {
        return this.model[0];
        break;
      }
      case "bmw": {
        return this.model[1];
        break;
      }
    }
  }
}
