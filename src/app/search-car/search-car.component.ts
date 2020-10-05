import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  manufactures: Array<String> = ['Audi', 'BMW', 'Jaguar', 'Mercedes Benz', 'Land Rover', 'Lexus', 'Volvo']
  audiCars: Array<String> = ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'];
  bmwCars: Array<String> = ['Series 1', 'Series 2','Series 3' ,'Series 4' ,'Series 5' ,'Series 6' ,'Series 7'];
  model: Array<String> = [];


  @ViewChild('manufacture') manufacture: ElementRef;
  constructor(carsService: CarsService) { }



  ngOnInit(): void {
  }

  onManufacture(value: any) {
    
  }

}
