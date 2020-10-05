import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  model: Array<String> = [];

  constructor() { 
  }

  choicedManufacture(value: Array<String>) {
   this.model = value;
  }
}
