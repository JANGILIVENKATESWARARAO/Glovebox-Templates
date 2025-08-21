import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicalsServices4Component } from './vechicals-services4.component';

describe('VechicalsServices4Component', () => {
  let component: VechicalsServices4Component;
  let fixture: ComponentFixture<VechicalsServices4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VechicalsServices4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechicalsServices4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
