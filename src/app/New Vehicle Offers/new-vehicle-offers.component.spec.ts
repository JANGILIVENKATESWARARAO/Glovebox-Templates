import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehicleOffersComponent } from './new-vehicle-offers.component';

describe('NewVehicleoffersComponent', () => {
  let component: NewVehicleOffersComponent;
  let fixture: ComponentFixture<NewVehicleOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewVehicleOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVehicleOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
