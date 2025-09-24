import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage21Component } from './landingpage21.component';

describe('Landingpage21Component', () => {
  let component: Landingpage21Component;
  let fixture: ComponentFixture<Landingpage21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
