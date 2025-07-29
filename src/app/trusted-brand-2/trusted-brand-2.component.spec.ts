import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedBrand2Component } from './trusted-brand-2.component';

describe('TrustedBrand2Component', () => {
  let component: TrustedBrand2Component;
  let fixture: ComponentFixture<TrustedBrand2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedBrand2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedBrand2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
