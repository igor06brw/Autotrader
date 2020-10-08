import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsCollectionService {
  cars: Array<Object>;
  
  constructor() { }

  getCars() {
    this.cars = [
      {
        id: 0, manufacture: 'bmw', model: 'series3', price: 40000
      }
    ]
    return this.cars;
  }
}
