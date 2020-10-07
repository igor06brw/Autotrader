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
  models: any = [];
  search: Array<String> = [];
  resultsArr: any = [];


  @ViewChild('manufacture') manufacture: ElementRef;


  constructor(private carsService: CarsService) {}



  ngOnInit(): void {
    this.manufactures.forEach(e => this.resultsArr.push(e.name));
  }

  checkArrays(value: String) {
    this.resultsArr.forEach((e, i) => {
      if(this.search = []) {
        this.search.push(value);
      }
      if(this.search[0] == e) {
        console.log(this.search[0], value);
        this.search[0] = value;
        this.search.splice(1, 1);
      }
    });
    
  }

  onManufacture(value: any) {
    const stringValue: String = String(value);
    this.checkArrays(stringValue);
    this.models = this.carsService.choicedManufacture(value);
  }
  onModel(value: string) {
    this.search.push(value);
    console.log(this.search);
  }
  onPrice(value: string) {
    this.search.push(value);
    console.log(this.search);
  }
}

