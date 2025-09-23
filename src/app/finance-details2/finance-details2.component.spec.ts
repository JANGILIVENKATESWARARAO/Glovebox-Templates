import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDetails2Component } from './finance-details2.component';

describe('FinanceDetails2Component', () => {
  let component: FinanceDetails2Component;
  let fixture: ComponentFixture<FinanceDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceDetails2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
