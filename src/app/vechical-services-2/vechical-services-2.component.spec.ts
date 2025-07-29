import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicalServices2Component } from './vechical-services-2.component';

describe('VechicalServices2Component', () => {
  let component: VechicalServices2Component;
  let fixture: ComponentFixture<VechicalServices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VechicalServices2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechicalServices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
