import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCars1Component } from './used-cars1.component';

describe('UsedCars1Component', () => {
  let component: UsedCars1Component;
  let fixture: ComponentFixture<UsedCars1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsedCars1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedCars1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
