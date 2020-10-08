import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { MANUFACTURES } from '../base/manufactures';
import { Car } from '../models/car';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  manufactures: Array<Object> = MANUFACTURES; 
  
  prices: Array<String> = ['40000', '30000', '15000', '10000', '7500'];
  years: Array<String> = ['2020', '2019', '2018', '2017', '2016', '2015'];
  mileages: Array<String> = ['2500', '3000', '4000', '5000', '7000'];

  models: any = [];
  resultsArr: any = [];

  searchedCar: Car = new Car();


  constructor(private carsService: CarsService) {}



  ngOnInit(): void {
  }
}

