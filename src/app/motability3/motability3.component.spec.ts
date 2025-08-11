import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motability3Component } from './motability3.component';

describe('Motability3Component', () => {
  let component: Motability3Component;
  let fixture: ComponentFixture<Motability3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motability3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motability3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
