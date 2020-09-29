import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  // @ViewChild('hamburger') hamburger: ElementRef;

  lol: string;

  constructor() { }

  ngOnInit(): void {
  }

  toggleHamburger(value: any) {
    value.classList.toggle('is-active');
    value.parentNode.children[1].classList.toggle('is-active');
  }

  @HostListener('window:scroll') onScroll(value: string) {
    console.log(window.pageYOffset);
  }
}


