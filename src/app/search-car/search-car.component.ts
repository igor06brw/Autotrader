import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ModelsService } from '../services/models.service';
import { SearchCarsService } from '../services/search-cars.service';

import { MANUFACTURES } from '../base/manufactures';
import { MODELS } from '../base/models';
import { PRICES } from '../base/prices';
import { YEARS } from '../base/years';
import { MILEAGES } from '../base/mileages';

import { CAR_COLLECTION } from '../models/cars.collection'


@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {
  manufactures: Array<Object> = MANUFACTURES; 
  prices: Object = PRICES;
  years: Object = YEARS;
  mileages: Object =  MILEAGES;
  models: Array<Object> = MODELS;
  handleModels: Array<String> = [];
  
  
  
  filteredCars: Array<Object> = [];
  cars = CAR_COLLECTION;


  filterCarsForm: Object = {};
  searchCarsForm = this.fb.group({
    manufacture: [],
    model: [],
    price: [],
    year: [],
    mileage: []
  });

  constructor(private fb: FormBuilder,
              private modelsService: ModelsService,  
              private searchCarsService: SearchCarsService) {}


  ngOnInit(): void {
    console.log(this.filteredCars);
  }
  
  onSubmit() {
    for(const[key, value] of Object.entries(this.searchCarsForm.value)) {
      if(value != null) {
        this.searchCarsService.filteredCar = Object.assign(this.searchCarsService.filteredCar, {[key]: value})
        this.searchCarsService.onSearch();
        this.filteredCars = this.searchCarsService.carArr
        console.log(this.searchCarsService.filteredCar);
      }
    }
  }
  onManufacture(value: string) {
    this.modelsService.choicedManufacture(value);
    this.handleModels = this.modelsService.choicedModels
  }
}

