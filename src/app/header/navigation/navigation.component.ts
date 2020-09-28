import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // @ViewChild('hamburger') hamburger: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHamburger(value: any) {
    value.classList.toggle('is-active');
  }


}
