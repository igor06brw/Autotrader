import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowColorsOfCarComponent } from './show-colors-of-car.component';

describe('ShowColorsOfCarComponent', () => {
  let component: ShowColorsOfCarComponent;
  let fixture: ComponentFixture<ShowColorsOfCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowColorsOfCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowColorsOfCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
