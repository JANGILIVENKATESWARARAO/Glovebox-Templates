import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsandcareersComponent } from './jobsandcareers.component';

describe('JobsandcareersComponent', () => {
  let component: JobsandcareersComponent;
  let fixture: ComponentFixture<JobsandcareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsandcareersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsandcareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
