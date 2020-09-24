import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-colors-of-car',
  templateUrl: './show-colors-of-car.component.html',
  styleUrls: ['./show-colors-of-car.component.scss']
})
export class ShowColorsOfCarComponent implements OnInit {

  @ViewChild('image') image : ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  callArrow() {
    if(this.image.nativeElement.children[0].classList.contains('visible')) {
      this.image.nativeElement.children[0].classList.remove('visible');
      this.image.nativeElement.children[0].classList.add('unvisible');
      this.image.nativeElement.children[1].classList.remove('unvisible');
      this.image.nativeElement.children[1].classList.add('visible');
    } else {
      this.image.nativeElement.children[0].classList.remove('unvisible');
      this.image.nativeElement.children[0].classList.add('visible');
      this.image.nativeElement.children[1].classList.remove('visible');
      this.image.nativeElement.children[1].classList.add('unvisible');
    }
    console.log();
  }

}
