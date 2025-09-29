import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage24Component } from './landingpage24.component';

describe('Landingpage24Component', () => {
  let component: Landingpage24Component;
  let fixture: ComponentFixture<Landingpage24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
