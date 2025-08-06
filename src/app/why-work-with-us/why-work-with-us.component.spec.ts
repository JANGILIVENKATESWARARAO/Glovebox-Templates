import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWorkWithUsComponent } from './why-work-with-us.component';

describe('WhyWorkWithUsComponent', () => {
  let component: WhyWorkWithUsComponent;
  let fixture: ComponentFixture<WhyWorkWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWorkWithUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWorkWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
