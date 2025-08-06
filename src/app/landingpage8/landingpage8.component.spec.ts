import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage8Component } from './landingpage8.component';

describe('Landingpage8Component', () => {
  let component: Landingpage8Component;
  let fixture: ComponentFixture<Landingpage8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
