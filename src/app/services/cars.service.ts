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
      case "jaguar": {
        return this.model[2];
        break;
      }
      case "mercedesBenz": {
        return this.model[3];
        break;
      }
      case "volvo": {
        return this.model[4];
        break;
      }
      case "lexus": {
        return this.model[5];
        break;
      }
      case "landRover": {
        return this.model[6];
        break;
      }
    }
  }
}
