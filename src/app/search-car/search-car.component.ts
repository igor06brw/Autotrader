import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ModelsService } from '../services/models.service';

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
  
  
  cars = CAR_COLLECTION;



  searchCarsForm = this.fb.group({
    manufacture: [''],
    model: [''],
    price: ['']
  });

  constructor(private fb: FormBuilder, private modelsService: ModelsService) {}

  ngOnInit(): void {
    console.log(this.handleModels, this.prices)
  }

  example() {
    console.log(this.handleModels, this.prices)
  }

  onSubmit() {
    console.log(this.searchCarsForm.value);
  }
  onManufacture(value: string) {
    this.modelsService.choicedManufacture(value);
    this.handleModels = this.modelsService.choicedModels
  }
}

