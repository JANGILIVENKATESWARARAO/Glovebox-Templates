import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerComponent2Component } from './career-component2.component';

describe('CareerComponent2Component', () => {
  let component: CareerComponent2Component;
  let fixture: ComponentFixture<CareerComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
