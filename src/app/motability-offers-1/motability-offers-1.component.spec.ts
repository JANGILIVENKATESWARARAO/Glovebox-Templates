import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotabilityOffers1Component } from './motability-offers-1.component';

describe('MotabilityOffers1Component', () => {
  let component: MotabilityOffers1Component;
  let fixture: ComponentFixture<MotabilityOffers1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotabilityOffers1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotabilityOffers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
