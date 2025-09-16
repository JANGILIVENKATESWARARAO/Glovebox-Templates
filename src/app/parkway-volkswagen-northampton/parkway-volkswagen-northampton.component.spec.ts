import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkwayVolkswagenNorthamptonComponent } from './parkway-volkswagen-northampton.component';

describe('ParkwayVolkswagenNorthamptonComponent', () => {
  let component: ParkwayVolkswagenNorthamptonComponent;
  let fixture: ComponentFixture<ParkwayVolkswagenNorthamptonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkwayVolkswagenNorthamptonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkwayVolkswagenNorthamptonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
