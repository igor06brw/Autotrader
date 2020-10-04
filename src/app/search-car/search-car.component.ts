import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  manufactures: Array<String> = ['Audi', 'BMW', 'Mercedes Benz']

  constructor() { }



  ngOnInit(): void {
  }

}
