import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage4Component } from './landingpage4.component';

describe('Landingpage4Component', () => {
  let component: Landingpage4Component;
  let fixture: ComponentFixture<Landingpage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
