import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalsServices1Component } from './vehicals-services-1.component';

describe('VehicalsServices1Component', () => {
  let component: VehicalsServices1Component;
  let fixture: ComponentFixture<VehicalsServices1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicalsServices1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicalsServices1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
