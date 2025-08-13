import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage13Component } from './landingpage13.component';

describe('Landingpage13Component', () => {
  let component: Landingpage13Component;
  let fixture: ComponentFixture<Landingpage13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
