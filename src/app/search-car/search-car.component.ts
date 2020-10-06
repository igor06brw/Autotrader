import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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


  @ViewChild('manufacture') manufacture: ElementRef;


  constructor(private carsService: CarsService) {
  }



  ngOnInit(): void {
    console.log(this.manufactures);
  }

  onManufacture(value: any) {
    
    this.search.push(value);
    console.log(value);
    this.models = this.carsService.choicedManufacture(value);
  }
  onModel(value: string) {
    this.search.push(value);
    console.log(this.search);
  }
}

