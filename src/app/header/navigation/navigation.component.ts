import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('nav') nav: ElementRef;

  lol: string;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHamburger(value: any) {
    value.classList.toggle('is-active');
    value.parentNode.children[1].classList.toggle('is-active');
    
  }

  @HostListener('window:scroll') onScroll() {
    if(window.pageYOffset > 25) {
      this.nav.nativeElement.classList.add('position-fixed');
    } else {
      this.nav.nativeElement.classList.remove('position-fixed');
    }
  }
}


