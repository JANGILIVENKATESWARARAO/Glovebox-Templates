import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motability2Component } from './motability2.component';

describe('Motability2Component', () => {
  let component: Motability2Component;
  let fixture: ComponentFixture<Motability2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motability2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motability2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
