import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotabilityOffers2Component } from './motability-offers-2.component';

describe('MotabilityOffers2Component', () => {
  let component: MotabilityOffers2Component;
  let fixture: ComponentFixture<MotabilityOffers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotabilityOffers2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotabilityOffers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
