import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearestParkway2Component } from './nearest-parkway2.component';

describe('NearestParkway2Component', () => {
  let component: NearestParkway2Component;
  let fixture: ComponentFixture<NearestParkway2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NearestParkway2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearestParkway2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
