import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage12Component } from './landingpage12.component';

describe('Landingpage12Component', () => {
  let component: Landingpage12Component;
  let fixture: ComponentFixture<Landingpage12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
