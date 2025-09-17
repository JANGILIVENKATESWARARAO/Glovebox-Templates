import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner7Component } from './banner7.component';

describe('Banner7Component', () => {
  let component: Banner7Component;
  let fixture: ComponentFixture<Banner7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banner7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banner7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
