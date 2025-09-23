import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage26Component } from './landingpage26.component';

describe('Landingpage26Component', () => {
  let component: Landingpage26Component;
  let fixture: ComponentFixture<Landingpage26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
