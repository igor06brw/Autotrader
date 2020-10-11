import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {


  titleId: Number;


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.titleId =+ this.route.snapshot.paramMap.get('id');
  }

}
