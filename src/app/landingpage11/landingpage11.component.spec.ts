import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage11Component } from './landingpage11.component';

describe('Landingpage11Component', () => {
  let component: Landingpage11Component;
  let fixture: ComponentFixture<Landingpage11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
