import { Injectable } from '@angular/core';
import { MODELS } from '../base/mileages';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  models: any = MODELS;
  choicedModels: Array<String> = [];

  constructor() { 
  }

  choiceModel(value: number) {
    return this.choicedModels = this.models[value]
  }

  choicedManufacture(value: string) {
    switch (value) {
      case "audi": {
        return this.choiceModel(0)
        break;
      }
      case "bmw": {
        return this.choiceModel(1)
        break;
      }
      case "volvo": {
        return this.choiceModel(2)
        break;
      }
      case "jaguar": {
        return this.choiceModel(3)
        break;
      }
      case "mercedesBenz": {
        return this.choiceModel(4)
        break;
      }
      case "lexus": {
        return this.choiceModel(5)
        break;
      }
      case "landRover": {
        return this.choiceModel(6)
        break;
      }
    }
  }
}
