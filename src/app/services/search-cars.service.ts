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
    console.log(this.filteredCar);
    Object.entries(this.filteredCar).forEach(([keyOfFilterCar, valueOfFilterCar], indexOfFilterCar) => {
      this.cars.forEach((car, indexOfCars) => {
        Object.entries(car).forEach(([keyOfCar, valueOfCar], indexOfCar) => {
          if(this.carArr.includes(this.cars[indexOfCars]) == false) { 
            // if('manufacture' == keyOfFilterCar && valueOfCar == valueOfFilterCar) {
            //   this.carArr.push(this.cars[indexOfCars]);
            // }
            // if('model' == keyOfFilterCar && valueOfCar == valueOfFilterCar) {
            //   this.carArr.push(this.cars[indexOfCars]);
            // }
            // if('price' == keyOfFilterCar && valueOfCar < valueOfFilterCar) {
            //   this.carArr.push(this.cars[indexOfCars]);
            // }
            console.log('price' == keyOfFilterCar, keyOfCar == keyOfFilterCar, valueOfFilterCar, valueOfCar);
            if('price' == keyOfFilterCar &&  keyOfCar == keyOfFilterCar && valueOfCar < valueOfFilterCar) {
              this.carArr.push(this.cars[indexOfCars]);
            }
          }
        });
        // if('manufacture' == keyOfFilterCar && valueOfCar == valueOfFilterCar) {
        //   this.carArr.push(this.cars[indexOfCar]);
        //   console.log(this.carArr);
        // } else {
        //   return null;
        // }
      })
      // this.cars.forEach((car, index) => {
      //   Object.entries(car).forEach(([keyOfCar, valueOfCar], indexOfCar) => {   
      //     if('manufacture' == keyOfFilterCar && keyOfCar == keyOfFilterCar && valueOfCar == valueOfFilterCar) {
      //       return this.carArr.push(this.cars[index]);
      //     }
      //     if('model' == keyOfFilterCar && valueOfCar != valueOfFilterCar) {
      //       console.log('sss');
      //     }
      //   });
      // });
    });
    console.log(this.carArr)
  }
}
