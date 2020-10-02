import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header') header: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('window:scroll') onScroll() {
    if(window.pageYOffset > 25) {
      this.header.nativeElement.classList.add('justify-header');
    } else {
      this.header.nativeElement.classList.remove('justify-header');
    }
  }
}
