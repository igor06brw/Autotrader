import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-colors-of-car',
  templateUrl: './show-colors-of-car.component.html',
  styleUrls: ['./show-colors-of-car.component.scss']
})
export class ShowColorsOfCarComponent implements OnInit {

  typeOfLacquer: string;
  
  @ViewChild('image') image : ElementRef;
  @ViewChild('lacquerWhite') lacquerWhite : ElementRef;
  @ViewChild('lacquerGrey') lacquerGrey : ElementRef;
  @ViewChild('lacquerBlack') lacquerBlack : ElementRef;


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

  callLacquer(value: HTMLElement) {
    if(value.classList.contains('lacquer__color--white')) {
      this.typeOfLacquer = value.dataset.lacquer;
      console.log(this.typeOfLacquer);
    }
    if(value.classList.contains('lacquer__color--grey')) {
      this.typeOfLacquer = value.dataset.lacquer;
    }
    if(value.classList.contains('lacquer__color--black')) {
      this.typeOfLacquer = value.dataset.lacquer;
    }
  }

}
