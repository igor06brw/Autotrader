import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-colors-of-car',
  templateUrl: './show-colors-of-car.component.html',
  styleUrls: ['./show-colors-of-car.component.scss']
})
export class ShowColorsOfCarComponent implements OnInit {

  @ViewChild('image') image : HTMLDivElement;

  constructor() { }

  ngOnInit(): void {
  }

  callArrow() {
    
    console.log(this.image.children);
  }

}
