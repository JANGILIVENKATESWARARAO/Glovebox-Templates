import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage5Component } from './landingpage5.component';

describe('Landingpage5Component', () => {
  let component: Landingpage5Component;
  let fixture: ComponentFixture<Landingpage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
