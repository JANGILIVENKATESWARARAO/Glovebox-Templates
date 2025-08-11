import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParkway4Component } from './about-parkway4.component';

describe('AboutParkway4Component', () => {
  let component: AboutParkway4Component;
  let fixture: ComponentFixture<AboutParkway4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutParkway4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutParkway4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
