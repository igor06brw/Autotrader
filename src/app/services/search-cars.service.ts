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

  onDeleteFilteredCars() {

  }

  onSearch() {
    this.carArr = [];
    for(const[keyOfFilter, valueOfFilter] of Object.entries(this.filteredCar)) {
      this.cars.forEach((el, index) => {
        for(const[keyOfCar, valueOfCar] of Object.entries(el)) {
          if(keyOfFilter == keyOfCar && valueOfFilter == valueOfCar) {
            if(this.carArr.includes(this.cars[index]) == false) {
              this.carArr.push(this.cars[index]);
            }
          }
          // console.log(el.hasOwnProperty('model'), keyOfFilter);
          if(keyOfFilter == keyOfCar && valueOfFilter != valueOfCar) {
            this.carArr.forEach((e, index) => {
              for(const[keyOfDeleteCar, valueOfDeleteCar] of Object.entries(e)) {
                // if(keyOfFilter == 'price' && valueOfFilter <= valueOfDeleteCar) {
                //   console.log(keyOfFilter, valueOfFilter, valueOfDeleteCar )
                //   this.carArr.splice(index, 1);
                // }
                // if(keyOfFilter == 'year' && valueOfFilter >= valueOfDeleteCar) {
                //   console.log(keyOfFilter, valueOfFilter, valueOfDeleteCar )
                //   this.carArr.splice(index, 1);
                // }
                // if(keyOfFilter == 'mileage' && valueOfFilter <= valueOfDeleteCar) {
                //   console.log(keyOfFilter, valueOfFilter, valueOfDeleteCar )
                //   this.carArr.splice(index, 1);
                // }
                if(Object.keys(e)[2] == keyOfDeleteCar && valueOfFilter != valueOfDeleteCar) {
                  console.log(Object.keys(e)[2]  == 'model',valueOfFilter,valueOfDeleteCar)
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
