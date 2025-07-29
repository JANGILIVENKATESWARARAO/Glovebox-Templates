import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindYourCar2Component } from './find-your-car-2.component';

describe('FindYourCar2Component', () => {
  let component: FindYourCar2Component;
  let fixture: ComponentFixture<FindYourCar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindYourCar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindYourCar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
