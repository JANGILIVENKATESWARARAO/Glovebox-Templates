import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showingcars2Component } from './showingcars2.component';

describe('Showingcars2Component', () => {
  let component: Showingcars2Component;
  let fixture: ComponentFixture<Showingcars2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showingcars2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showingcars2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
