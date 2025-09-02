import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage10Component } from './landingpage10.component';

describe('Landingpage10Component', () => {
  let component: Landingpage10Component;
  let fixture: ComponentFixture<Landingpage10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
