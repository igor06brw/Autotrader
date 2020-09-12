import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNewestCarComponent } from './review-newest-car.component';

describe('ReviewNewestCarComponent', () => {
  let component: ReviewNewestCarComponent;
  let fixture: ComponentFixture<ReviewNewestCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewNewestCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewNewestCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
