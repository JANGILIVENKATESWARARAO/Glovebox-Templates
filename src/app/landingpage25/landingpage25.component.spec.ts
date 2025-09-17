import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage25Component } from './landingpage25.component';

describe('Landingpage25Component', () => {
  let component: Landingpage25Component;
  let fixture: ComponentFixture<Landingpage25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
