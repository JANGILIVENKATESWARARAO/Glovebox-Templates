import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage22Component } from './landingpage22.component';

describe('Landingpage22Component', () => {
  let component: Landingpage22Component;
  let fixture: ComponentFixture<Landingpage22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
