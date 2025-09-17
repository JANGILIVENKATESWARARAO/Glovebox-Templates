import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkwayVolkswagenDerbyComponent } from './parkway-volkswagen-derby.component';

describe('ParkwayVolkswagenDerbyComponent', () => {
  let component: ParkwayVolkswagenDerbyComponent;
  let fixture: ComponentFixture<ParkwayVolkswagenDerbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkwayVolkswagenDerbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkwayVolkswagenDerbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
