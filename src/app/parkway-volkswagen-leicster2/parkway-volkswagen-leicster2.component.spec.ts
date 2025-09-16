import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkwayVolkswagenLeicster2Component } from './parkway-volkswagen-leicster2.component';

describe('ParkwayVolkswagenLeicster2Component', () => {
  let component: ParkwayVolkswagenLeicster2Component;
  let fixture: ComponentFixture<ParkwayVolkswagenLeicster2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkwayVolkswagenLeicster2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkwayVolkswagenLeicster2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
