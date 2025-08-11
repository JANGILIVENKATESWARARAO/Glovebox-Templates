import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkwayVolkswagenComponent } from './parkway-volkswagen.component';

describe('ParkwayVolkswagenComponent', () => {
  let component: ParkwayVolkswagenComponent;
  let fixture: ComponentFixture<ParkwayVolkswagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkwayVolkswagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkwayVolkswagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
