import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

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
import { WindowService } from '../services/window.service';


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

  slides: any = [[]];

  @ViewChild('displayResults') displayResults: ElementRef;
  scrHeight:any;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      if(480 >= this.scrWidth) {
        this.slides = this.chunk(this.filteredCars, 3);
      }
  }

  constructor(private fb: FormBuilder,
              private modelsService: ModelsService,  
              private searchCarsService: SearchCarsService) 
              { this.getScreenSize(); }

  
  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
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
    this.slides = this.chunk(this.filteredCars, 6);
    this.onCleanForm();
  }

  onManufacture(value: string) {
    this.modelsService.choicedManufacture(value);
    this.handleModels = this.modelsService.choicedModels
  }

  

  ngOnInit(): void {
    this.filteredCars = this.cars;
    this.slides = this.chunk(this.filteredCars, 6);
    this.getScreenSize();
  }
}

