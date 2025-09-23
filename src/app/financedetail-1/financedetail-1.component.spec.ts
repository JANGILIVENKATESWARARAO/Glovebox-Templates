import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Financedetail1Component } from './financedetail-1.component';

describe('Financedetail1Component', () => {
  let component: Financedetail1Component;
  let fixture: ComponentFixture<Financedetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Financedetail1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Financedetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
