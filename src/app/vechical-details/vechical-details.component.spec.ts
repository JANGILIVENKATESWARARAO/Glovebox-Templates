import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicalDetailsComponent } from './vechical-details.component';

describe('VechicalDetailsComponent', () => {
  let component: VechicalDetailsComponent;
  let fixture: ComponentFixture<VechicalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VechicalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechicalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
