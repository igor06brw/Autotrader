import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCarsComponent } from './random-cars.component';

describe('RandomCarsComponent', () => {
  let component: RandomCarsComponent;
  let fixture: ComponentFixture<RandomCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
