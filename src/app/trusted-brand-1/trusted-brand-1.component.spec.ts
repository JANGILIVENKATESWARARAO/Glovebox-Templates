import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedBrand1Component } from './trusted-brand-1.component';

describe('TrustedBrand1Component', () => {
  let component: TrustedBrand1Component;
  let fixture: ComponentFixture<TrustedBrand1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustedBrand1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrustedBrand1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
