import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobsandcareers1Component } from './jobsandcareers1.component';

describe('Jobsandcareers1Component', () => {
  let component: Jobsandcareers1Component;
  let fixture: ComponentFixture<Jobsandcareers1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jobsandcareers1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jobsandcareers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
