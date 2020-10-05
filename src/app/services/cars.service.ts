import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  model: Array<String> = [];

  constructor() { 
  }

  choicedManufacture(value: String) {
    switch (value) {
      case "audi": {
        break;
      }
      case "bmw": {
        break;
      }
    }
  }
}
