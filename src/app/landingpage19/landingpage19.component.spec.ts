import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landingpage19Component } from './landingpage19.component';

describe('Landingpage19Component', () => {
  let component: Landingpage19Component;
  let fixture: ComponentFixture<Landingpage19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landingpage19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landingpage19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
