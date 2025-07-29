import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityService1Component } from './mobility-service-1.component';

describe('MobilityService1Component', () => {
  let component: MobilityService1Component;
  let fixture: ComponentFixture<MobilityService1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilityService1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilityService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
