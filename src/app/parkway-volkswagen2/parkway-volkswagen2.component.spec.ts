import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkwayVolkswagen2Component } from './parkway-volkswagen2.component';

describe('ParkwayVolkswagen2Component', () => {
  let component: ParkwayVolkswagen2Component;
  let fixture: ComponentFixture<ParkwayVolkswagen2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkwayVolkswagen2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkwayVolkswagen2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
