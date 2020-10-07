import { Component, ElementRef, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { Manufactures } from '../base/manufactures';

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


  @ViewChild('manufacture') manufacture: ElementRef;


  constructor(private carsService: CarsService) {}



  ngOnInit(): void {
    this.manufactures.forEach(e => this.resultsArr.push(e.name));
  }

  checkManufacture(value: String) {
    this.resultsArr.forEach((e) => {
      console.log(this.search);
      if(this.search >= []) {
        return this.search[0] = value, this.search[1] = 'all';
      }
      if(this.search[0] == e) {
        return this.search[0] = value, this.search[1] = 'all';
      }
    });
  }
  checkModel(value: String) {
    if(this.search[1] != value) {
      this.search[1] = value;
      console.log(this.search);
    }
  }
  checkPrice(value: String) {
    if(this.search.length == 0) {
      this.search[0] = 'all';
      this.search[1] = 'all';
      this.search[2] = value;
    }
    if(this.search[2] != value) {
      this.search[2] = value;
      console.log(this.search);
    }
  }

  checkYear(value: String) {
    if(this.search.length == 0) {
      this.search[0] = 'all';
      this.search[1] = 'all';
      this.search[2] = 'all';
      this.search[3] = value;
    }
    if(this.search[3] != value) {
      this.search[3] = value;
      console.log(this.search);
    }
  }

  checkMileage(value: String) {
    if(this.search.length == 0) {
      this.search[0] = 'all';
      this.search[1] = 'all';
      this.search[2] = 'all';
      this.search[3] = 'all';
      this.search[4] = value;
    }
    if(this.search[4] != value) {
      this.search[4] = value;
      console.log(this.search);
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

