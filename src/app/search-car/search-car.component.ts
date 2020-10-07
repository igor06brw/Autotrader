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
  prices: Array<String> = ['40000', '30000', '15000', '10000', '7500']
  models: any = [];
  search: Array<String> = [];
  resultsArr: any = [];


  @ViewChild('manufacture') manufacture: ElementRef;


  constructor(private carsService: CarsService) {}



  ngOnInit(): void {
    this.manufactures.forEach(e => this.resultsArr.push(e.name));
  }

  checkArrays(value: String) {
    this.resultsArr.forEach((e) => {
      if(this.search = []) {
        this.search.push(value);
      }
      if(this.search[0] == e) {
        console.log(this.search[0], value);
        this.search[0] = value;
        this.search.splice(0, 1);
      }
    });
  }

  checkPrice(value: String) {
    if(this.search == []) {
      this.search[0] = 'all';
      this.search[1] = 'all';
      this.search[2] = 'value';
    }
    if(this.search[2] != value) {
      this.search[2] = value;
    }
  }

  onManufacture(value: String) {
    this.checkArrays(value);
    this.models = this.carsService.choicedManufacture(value);
  }
  onModel(value: String) {
    this.search.push(value);
    console.log(this.search);
  }
  onPrice(value: String) {
    this.checkPrice(value)
    console.log(this.search);
  }
}

