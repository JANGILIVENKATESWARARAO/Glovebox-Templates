import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Faq4Component } from './faq4.component';

describe('Faq4Component', () => {
  let component: Faq4Component;
  let fixture: ComponentFixture<Faq4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Faq4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Faq4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
