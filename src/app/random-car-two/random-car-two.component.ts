import { Component, OnInit } from '@angular/core';
import { CAR_COLLECTION } from '../models/cars.collection';

@Component({
  selector: 'app-random-car-two',
  templateUrl: './random-car-two.component.html',
  styleUrls: ['./random-car-two.component.scss']
})
export class RandomCarTwoComponent implements OnInit {

  cars: any = CAR_COLLECTION;
  galleryCars: any;

  constructor() { }

  ngOnInit(): void {
    this.galleryCars = this.chunk(this.cars, 7);
  }

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}
