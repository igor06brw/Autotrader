import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Manufactures } from '../base/manufactures';
import { Car } from '../models/car';
import { carCollection } from '../models/cars.collection';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  manufactures: Array<Object> = Manufactures; 
  
  prices: Array<String> = ['40000', '30000', '15000', '10000', '7500'];
  years: Array<String> = ['2020', '2019', '2018', '2017', '2016', '2015'];
  mileages: Array<String> = ['2500', '3000', '4000', '5000', '7000'];

  models: any = [];
  search: Array<String> = [];
  resultsArr: any = [];

  searchCar: Car = new Car();


  @ViewChild('manufacture') manufacture: ElementRef;


  constructor(private carsService: CarsService) {}



  ngOnInit(): void {
    this.manufactures.forEach(e => this.resultsArr.push(e.name));
    console.log(this.searchCar);
  }

  checkManufacture(value: String) {
    this.resultsArr.forEach((e) => {
      console.log(this.searchCar, value);
      if(this.searchCar.manufacture == undefined) {
        return this.searchCar.manufacture = value, this.searchCar.model = undefined;
      }
      if(this.searchCar.manufacture != e) {
        return this.searchCar.manufacture = value, this.searchCar.model = undefined;
      }
    });
  }
  checkModel(value: String) {
    if(this.searchCar.model != value) {
      this.searchCar.model = value;
      console.log(this.searchCar);
    }
  }
  checkPrice(value: String) {
    let convert = Number(value);
    if(this.searchCar.price == 0) {
      this.searchCar.price = convert;
    }
    if(this.searchCar.price != convert) {
      this.searchCar.price = convert;
      console.log(this.searchCar);
    }
  }
  checkYear(value: String) {
    let convert = Number(value);
    if(this.searchCar.year == 0) {
      this.searchCar.year = convert;
    }
    if(this.searchCar.year != convert) {
      this.searchCar.year = convert;
      console.log(this.searchCar);
    }
  }
  checkMileage(value: String) {
    let convert = Number(value);
    if(this.searchCar.mileage == 0) {
      this.searchCar.mileage = convert;
    }
    if(this.searchCar.mileage != convert) {
      this.searchCar.mileage = convert;
      console.log(this.searchCar);
    }
  }

  onManufacture(value: String) {
    this.checkManufacture(value);
    this.models = this.carsService.choicedManufacture(value);
  }
  onModel(value: String) {
    this.checkModel(value);
  }
  onPrice(value: String) {
    this.checkPrice(value);
  }
  onYear(value: String) {
    this.checkYear(value);
  }
  onMileage(value: String) {
    this.checkMileage(value);
  }
}

