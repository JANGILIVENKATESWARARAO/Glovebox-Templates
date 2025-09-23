import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage15Component } from './landingpage15.component';

describe('Landingpage15Component', () => {
  let component: Landingpage15Component;
  let fixture: ComponentFixture<Landingpage15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
