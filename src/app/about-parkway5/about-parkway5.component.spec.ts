import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParkway5Component } from './about-parkway5.component';

describe('AboutParkway5Component', () => {
  let component: AboutParkway5Component;
  let fixture: ComponentFixture<AboutParkway5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutParkway5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutParkway5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
