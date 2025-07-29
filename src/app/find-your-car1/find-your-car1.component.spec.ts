import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourCar1Component } from './find-your-car1.component';

describe('FindYourCar1Component', () => {
  let component: FindYourCar1Component;
  let fixture: ComponentFixture<FindYourCar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindYourCar1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindYourCar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
