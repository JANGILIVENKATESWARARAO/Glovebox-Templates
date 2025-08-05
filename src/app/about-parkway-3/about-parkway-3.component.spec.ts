import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParkway3Component } from './about-parkway-3.component';

describe('AboutParkway3Component', () => {
  let component: AboutParkway3Component;
  let fixture: ComponentFixture<AboutParkway3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutParkway3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutParkway3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
