import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CAR_COLLECTION } from './../../models/cars.collection';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {


  private titleId: Number;
  private manufacture: String;
  private cars = CAR_COLLECTION;
  public routedCar: any;


  constructor(private route: ActivatedRoute) {}

  onFindCarById() {
    this.cars.forEach((el, index) => {
      if(index == this.titleId) {
        this.routedCar = el;
      }
    });
  }

  ngOnInit(): void {
    this.titleId =+ this.route.snapshot.paramMap.get('id');
    this.onFindCarById();
    console.log(this.route.snapshot.paramMap)
  }

}
