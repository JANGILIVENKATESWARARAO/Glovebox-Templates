import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicalsServices3Component } from './vechicals-services3.component';

describe('VechicalsServices3Component', () => {
  let component: VechicalsServices3Component;
  let fixture: ComponentFixture<VechicalsServices3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VechicalsServices3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechicalsServices3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
