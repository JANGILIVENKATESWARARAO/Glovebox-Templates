import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestParkwayComponent } from './nearest-parkway.component';

describe('NearestParkwayComponent', () => {
  let component: NearestParkwayComponent;
  let fixture: ComponentFixture<NearestParkwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearestParkwayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearestParkwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
