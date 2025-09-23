import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showingcars4Component } from './showingcars4.component';

describe('Showingcars4Component', () => {
  let component: Showingcars4Component;
  let fixture: ComponentFixture<Showingcars4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showingcars4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showingcars4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
