import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage27Component } from './landingpage27.component';

describe('Landingpage27Component', () => {
  let component: Landingpage27Component;
  let fixture: ComponentFixture<Landingpage27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
