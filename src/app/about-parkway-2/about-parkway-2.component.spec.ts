import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParkway2Component } from './about-parkway-2.component';

describe('AboutParkway2Component', () => {
  let component: AboutParkway2Component;
  let fixture: ComponentFixture<AboutParkway2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutParkway2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutParkway2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
