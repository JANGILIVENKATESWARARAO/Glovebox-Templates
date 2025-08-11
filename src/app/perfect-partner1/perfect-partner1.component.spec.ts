import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectPartner1Component } from './perfect-partner1.component';

describe('PerfectPartner1Component', () => {
  let component: PerfectPartner1Component;
  let fixture: ComponentFixture<PerfectPartner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfectPartner1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfectPartner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
