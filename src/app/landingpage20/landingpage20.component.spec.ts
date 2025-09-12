import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage20Component } from './landingpage20.component';

describe('Landingpage20Component', () => {
  let component: Landingpage20Component;
  let fixture: ComponentFixture<Landingpage20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
