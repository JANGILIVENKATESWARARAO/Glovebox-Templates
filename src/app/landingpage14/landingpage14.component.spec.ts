import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage14Component } from './landingpage14.component';

describe('Landingpage14Component', () => {
  let component: Landingpage14Component;
  let fixture: ComponentFixture<Landingpage14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
