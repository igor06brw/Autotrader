import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCarTwoComponent } from './random-car-two.component';

describe('RandomCarTwoComponent', () => {
  let component: RandomCarTwoComponent;
  let fixture: ComponentFixture<RandomCarTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCarTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCarTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
