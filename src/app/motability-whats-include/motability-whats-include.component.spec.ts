import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotabilityWhatsIncludeComponent } from './motability-whats-include.component';

describe('MotabilityWhatsIncludeComponent', () => {
  let component: MotabilityWhatsIncludeComponent;
  let fixture: ComponentFixture<MotabilityWhatsIncludeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotabilityWhatsIncludeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotabilityWhatsIncludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
