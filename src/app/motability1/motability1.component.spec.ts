import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motability1Component } from './motability1.component';

describe('Motability1Component', () => {
  let component: Motability1Component;
  let fixture: ComponentFixture<Motability1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motability1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motability1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
