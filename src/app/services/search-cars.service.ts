import { Injectable } from '@angular/core';
import { CAR_COLLECTION } from '../models/cars.collection';

@Injectable({
  providedIn: 'root'
})
export class SearchCarsService {
  
  cars = CAR_COLLECTION;
  filterCar: Object = {};
  searchedCar: Object;
  carArr: Array<Object> = [];
  arrOfCarManufactures = [];
  arrOfCarModels = [];
  arrOfCarPrices = [];
  arrOfCarYears = [];
  arrOfCarMileages = [];
  toCompareArrays = [];
  resultArray = [];
  
  
  constructor() { }



  onDeleteFilteredCars(param: any) {
  }
  convertToNumber(param: Object) {
    Object.entries(param).forEach(([key, value], index) => {
      if(index == 2 || index == 3 || index == 4) {
        return this.filterCar[key] = Number(value);
      }
    });
  }

  compareArrays(param: Array<any>) {
    if(this.resultArray.length == 0) {
      this.resultArray = this.resultArray.concat(param);
    } else 
    if(param.length != 0) {
      this.resultArray = this.resultArray.concat(param);
      this.resultArray = this.resultArray.filter((a, i, aa) => aa.indexOf(a) === i && aa.lastIndexOf(a) !== i);
    } else {
      this.resultArray = this.resultArray.concat(param);
    }
  }

  onSearch() {
    this.carArr = [];
    this.convertToNumber(this.filterCar);
    this.cars.forEach((car, index) => {
      if('manufacture' == Object.keys(this.filterCar)[0] && Object.values(this.filterCar)[0] == car.manufacture) {
        this.arrOfCarManufactures.push(this.cars[index]);
      }
      if('model' == Object.keys(this.filterCar)[1] && Object.values(this.filterCar)[1] == car.model) {
        this.arrOfCarModels.push(this.cars[index]);
      }
      if('price' == Object.keys(this.filterCar)[2] && Object.values(this.filterCar)[2] >= car.price) {
        this.arrOfCarPrices.push(this.cars[index]);
      }
      if('year' == Object.keys(this.filterCar)[3] && Object.values(this.filterCar)[3] <= car.year) {
        this.arrOfCarYears.push(this.cars[index]);
      }
      if('mileage' == Object.keys(this.filterCar)[4] && Object.values(this.filterCar)[4] >= car.mileage) {
        this.arrOfCarMileages.push(this.cars[index]);
      }
    })
    this.arrOfCarManufactures.forEach((car, index) => {
      this.arrOfCarManufactures[index] = car.id;
    });
    this.arrOfCarModels.forEach((car, index) => {
      this.arrOfCarModels[index] = car.id;
    });
    this.arrOfCarPrices.forEach((car, index) => {
      this.arrOfCarPrices[index] = car.id;
    });
    this.arrOfCarYears.forEach((car, index) => {
      this.arrOfCarYears[index] = car.id;
    });
    this.arrOfCarMileages.forEach((car, index) => {
      this.arrOfCarMileages[index] = car.id;
    });


    this.toCompareArrays.push(this.arrOfCarManufactures, this.arrOfCarModels, this.arrOfCarPrices, this.arrOfCarYears, this.arrOfCarMileages);
    this.toCompareArrays.filter(e => this.compareArrays(e));

    this.cars.forEach((car, index) => {
      this.resultArray.filter(e => {
        if(e == car.id) {
          this.carArr.push(car);
        }
      });
    });

    this.arrOfCarManufactures = [];
    this.arrOfCarModels = [];
    this.arrOfCarPrices = [];
    this.arrOfCarYears = [];
    this.arrOfCarMileages = [];
    this.toCompareArrays = [];
    this.resultArray = [];
  }
}


