import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicles1Component } from './new-vehicles1.component';

describe('NewVehicles1Component', () => {
  let component: NewVehicles1Component;
  let fixture: ComponentFixture<NewVehicles1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVehicles1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVehicles1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
