import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { ModelsService } from '../services/models.service';

import { MANUFACTURES } from '../base/manufactures';
import { MODELS } from '../base/models';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  manufactures: Array<object> = MANUFACTURES; 
  // prices: Array<String> = ['40000', '30000', '15000', '10000', '7500'];
  // years: Array<String> = ['2020', '2019', '2018', '2017', '2016', '2015'];
  // mileages: Array<String> = ['2500', '3000', '4000', '5000', '7000'];
  models = MODELS;
  handleModels: Array<String> = [];



  searchCarsForm = this.fb.group({
    manufacture: [''],
    model: ['']
  });

  constructor(private fb: FormBuilder, private modelsService: ModelsService) {}

  ngOnInit(): void {
    console.log(this.models);
  }

  onSubmit() {
    console.log(this.searchCarsForm);
  }
  onManufacture(value: string) {
    this.modelsService.choicedManufacture(value);
    this.handleModels = this.modelsService.choicedModels
  }
}

