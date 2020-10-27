import { Component, ElementRef, HostListener, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  backgroundOne = true;
  @ViewChild('header') header: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.onChangeBackground();
  }

  onChangeBackground() {
    setInterval(() => {
      if(this.backgroundOne == true) {
        this.backgroundOne = false;
        this.header.nativeElement.style.backgroundImage = 'url(../../assets/header-1.jpg)';
      } else {
        this.backgroundOne = true;
        this.header.nativeElement.style.backgroundImage = 'url(../../assets/header-2.jpg)';
      }
    }, 8000);
  }

  
  @HostListener('window:scroll') onScroll() {
    if(window.pageYOffset > 25) {
      this.header.nativeElement.classList.add('justify-header');
    } else {
      this.header.nativeElement.classList.remove('justify-header');
    }
  }
}
