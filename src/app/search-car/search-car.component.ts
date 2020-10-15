import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ModelsService } from '../services/models.service';
import { SearchCarsService } from '../services/search-cars.service';

import { MANUFACTURES } from '../base/manufactures';
import { MODELS } from '../base/models';
import { PRICES } from '../base/prices';
import { YEARS } from '../base/years';
import { MILEAGES } from '../base/mileages';

import { CAR_COLLECTION } from '../models/cars.collection';

import { trigger, transition, animate, style, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  animations: [
    trigger('displayFilteredCars', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
  ],
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

  cleanForm() {
    this.searchCarsForm.reset();
  }

  showResults() {

  }
  
  onSubmit() {
   let convertedForm = { ...this.searchCarsForm.value, price: +this.searchCarsForm.value.price, year: +this.searchCarsForm.value.year, mileage: +this.searchCarsForm.value.mileage  };
    for(const[key, value] of Object.entries(convertedForm)) {
      if(value != 0 && value != null) {
        this.searchCarsService.filteredCar = Object.assign(this.searchCarsService.filteredCar, {[key]: value})
        console.log(this.searchCarsService.filteredCar);
        this.searchCarsService.onSearch();
        this.filteredCars = this.searchCarsService.carArr
        this.cleanForm();
      }
    }
    convertedForm = {};

  }
  onManufacture(value: string) {
    this.modelsService.choicedManufacture(value);
    this.handleModels = this.modelsService.choicedModels
  }
}

