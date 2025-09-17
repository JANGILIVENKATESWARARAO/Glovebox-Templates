import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage23Component } from './landingpage23.component';

describe('Landingpage23Component', () => {
  let component: Landingpage23Component;
  let fixture: ComponentFixture<Landingpage23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
