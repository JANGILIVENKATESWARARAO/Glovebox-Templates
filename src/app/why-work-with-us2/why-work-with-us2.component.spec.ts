import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWorkWithUs2Component } from './why-work-with-us2.component';

describe('WhyWorkWithUs2Component', () => {
  let component: WhyWorkWithUs2Component;
  let fixture: ComponentFixture<WhyWorkWithUs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWorkWithUs2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWorkWithUs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
