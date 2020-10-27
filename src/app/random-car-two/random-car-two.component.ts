import { Component, OnInit } from '@angular/core';
import { CAR_COLLECTION } from '../models/cars.collection';

@Component({
  selector: 'app-random-car-two',
  templateUrl: './random-car-two.component.html',
  styleUrls: ['./random-car-two.component.scss']
})
export class RandomCarTwoComponent implements OnInit {

  cars: any = CAR_COLLECTION;

  constructor() { }

  ngOnInit(): void {
  }

}
