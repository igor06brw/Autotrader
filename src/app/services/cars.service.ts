import { Injectable } from '@angular/core';
import { Model } from '../base/models';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  model: any = [];

  constructor(private modelOfCar: Model) { 
    this.model = modelOfCar;
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
