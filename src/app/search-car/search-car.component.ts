import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  manufactures: Array<String> = ['Audi', 'BMW', 'Jaguar', 'Mercedes Benz', 'Land Rover', 'Lexus', 'Volvo'];
  models: any = [];
  search: Array<String> = [];


  @ViewChild('manufacture') manufacture: ElementRef;



  constructor(private carsService: CarsService) {
  }



  ngOnInit(): void {
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

