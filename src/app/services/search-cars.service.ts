import { Injectable } from '@angular/core';
import { CAR_COLLECTION } from '../models/cars.collection';

@Injectable({
  providedIn: 'root'
})
export class SearchCarsService {
  
  cars = CAR_COLLECTION;
  filteredCar: Object = {};
  searchedCar: Object;
  carArr: Array<Object> = [];
  
  
  constructor() { }

  onSearch() {
    this.carArr = [];
    for(const[keyOfFilter, valueOfFilter] of Object.entries(this.filteredCar)) {
      this.cars.forEach((e, index) => {
        for(const[keyOfCar, valueOfCar] of Object.entries(e)) {
          if(keyOfFilter == keyOfCar && valueOfFilter == valueOfCar) {
            if(this.carArr.includes(this.cars[index]) == false) {
              this.carArr.push(this.cars[index]);
            }
          }
          if(keyOfFilter == keyOfCar && valueOfFilter != valueOfCar) {
            this.carArr.forEach((e, index) => {
              for(const[keyOfDeleteCar, valueOfDeleteCar] of Object.entries(e)) {
                if(keyOfFilter == keyOfDeleteCar && valueOfFilter != valueOfDeleteCar) {
                  this.carArr.splice(index, 1);
                }
              }
            });
          }
        }
      })
    }
  }
}
