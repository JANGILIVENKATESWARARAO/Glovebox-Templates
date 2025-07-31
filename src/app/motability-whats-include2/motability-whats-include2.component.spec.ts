import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotabilityWhatsInclude2Component } from './motability-whats-include2.component';

describe('MotabilityWhatsInclude2Component', () => {
  let component: MotabilityWhatsInclude2Component;
  let fixture: ComponentFixture<MotabilityWhatsInclude2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotabilityWhatsInclude2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotabilityWhatsInclude2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
