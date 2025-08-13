import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectPartner2Component } from './perfect-partner2.component';

describe('PerfectPartner2Component', () => {
  let component: PerfectPartner2Component;
  let fixture: ComponentFixture<PerfectPartner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfectPartner2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfectPartner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
