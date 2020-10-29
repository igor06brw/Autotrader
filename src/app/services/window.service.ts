import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService implements OnInit {
  

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  chuck(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}

