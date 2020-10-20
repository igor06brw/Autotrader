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

import { trigger, transition, animate, style } from '@angular/animations';


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
  galleryCars: Array<Object> = [];
  galleryCarsButton: Array<Number> = [];
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
  }

  onGallery() {
    let tempVar: number = 0;
    for(let i = 0; i < this.cars.length; i++) {
      if(i % 6 == 0) {
        tempVar += 1;
        this.galleryCarsButton.push(tempVar)
        console.log(this.galleryCarsButton);
      }
    }
    for(let i = 0; i < this.cars.length; i++) {
      if(i % 6 == 0) {
        this.galleryCars.push(this.cars[i])
      }
      this.galleryCars.push(this.cars[i])
    }
    console.log(this.galleryCars);
  }

  onCleanForm() {
    this.searchCarsForm.reset();
  }
  
  onSubmit() {
    Object.entries(this.searchCarsForm.value).forEach(([key, value]) => {
        this.searchCarsService.filterCar = Object.assign(this.searchCarsService.filterCar, {[key]: value})
    })
    console.log(this.searchCarsForm.value)
    this.searchCarsService.onSearch();
    this.filteredCars = this.searchCarsService.carArr
    this.onCleanForm();
    this.onGallery();
  }

  onManufacture(value: string) {
    this.modelsService.choicedManufacture(value);
    this.handleModels = this.modelsService.choicedModels
  }
}

