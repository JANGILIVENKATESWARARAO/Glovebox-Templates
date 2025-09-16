import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkwayVolkswagenLeicsterComponent } from './parkway-volkswagen-leicster.component';

describe('ParkwayVolkswagenLeicsterComponent', () => {
  let component: ParkwayVolkswagenLeicsterComponent;
  let fixture: ComponentFixture<ParkwayVolkswagenLeicsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkwayVolkswagenLeicsterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkwayVolkswagenLeicsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
