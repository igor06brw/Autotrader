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
          if(keyOfFilter == keyOfCar && valueOfFilter != valueOfCar) {
            this.carArr.forEach((e, index) => {
              for(const[keyOfDeleteCar, valueOfDeleteCar] of Object.entries(e)) {
                console.log()

                if(Object.keys(e)[2] == keyOfFilter && valueOfDeleteCar == valueOfCar && valueOfFilter != valueOfDeleteCar) {
                  console.log('model')
                  this.carArr.splice(index, 1);
                }
                if(Object.keys(e)[3] == keyOfFilter && valueOfDeleteCar == valueOfCar && valueOfDeleteCar > valueOfFilter) {
                  console.log(keyOfFilter, valueOfFilter, valueOfDeleteCar, this.carArr.splice(index, 1), index )
                  this.carArr.splice(index, 1);
                }
                // if(Object.keys(e)[4] == keyOfDeleteCar && valueOfDeleteCar == valueOfCar && valueOfFilter < valueOfDeleteCar) {
                //   // console.log(keyOfFilter, valueOfFilter, valueOfDeleteCar, this.carArr.splice(index, 1), index )
                //   this.carArr.splice(index, 1);
                // }
                // if(Object.keys(e)[5] == keyOfDeleteCar && valueOfDeleteCar == valueOfCar && valueOfFilter > valueOfDeleteCar) {
                //   // console.log(keyOfFilter, valueOfFilter, valueOfDeleteCar, this.carArr.splice(index, 1), index )
                //   this.carArr.splice(index, 1);
                // }
              }
            });
          }
        }
      })
    }
    console.log(this.carArr)
  }
}
