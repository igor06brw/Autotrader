import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CAR_COLLECTION } from '../models/cars.collection';
import { WindowService } from '../services/window.service';

@Component({
  selector: 'app-random-car-two',
  templateUrl: './random-car-two.component.html',
  styleUrls: ['./random-car-two.component.scss']
})
export class RandomCarTwoComponent implements OnInit {

  @ViewChild('displayCar') displayCar: ElementRef;
  scrHeight:any;
  scrWidth:any;
  
  cars: any = CAR_COLLECTION;
  galleryCars: any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
      this.scrHeight = window.innerHeight;
      this.scrWidth = window.innerWidth;
      console.log(this.scrWidth);
      if(480 >= this.scrWidth) {
        return this.galleryCars = this.chunk(this.cars, 1);
      } else if (740 >= this.scrWidth && this.scrWidth > 481) {
        return this.slides = this.chunk(this.filteredCars, 3);
      } else if (9999 >= this.scrWidth && this.scrWidth > 741) {
        return this.slides = this.chunk(this.filteredCars, 4);
      }
  }

  constructor(private windowService: WindowService) { }

  ngOnInit(): void {
    this.galleryCars = this.chunk(this.cars, 7);
    this.getScreenSize(this.displayCar);
  }

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}
