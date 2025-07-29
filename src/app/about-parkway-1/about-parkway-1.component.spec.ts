import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParkway1Component } from './about-parkway-1.component';

describe('AboutParkway1Component', () => {
  let component: AboutParkway1Component;
  let fixture: ComponentFixture<AboutParkway1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutParkway1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutParkway1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
