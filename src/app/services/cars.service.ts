import { Injectable } from '@angular/core';
import { MODELS } from '../base/models';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  models: any = MODELS;

  constructor() { 
  }



  choicedManufacture(value: Number) {
    switch (value) {
      case 0: {
        return this.models[0].model;
        break;
      }
      case 1: {
        return this.models[1].model;
        break;
      }
      case 2: {
        return this.models[2].model;
        break;
      }
      case 3: {
        return this.models[3].model;
        break;
      }
      case 4: {
        return this.models[4].model;
        break;
      }
      case 5: {
        return this.models[5].model;
        break;
      }
      case 6: {
        return this.models[6].model;
        break;
      }
    }
  }
}
