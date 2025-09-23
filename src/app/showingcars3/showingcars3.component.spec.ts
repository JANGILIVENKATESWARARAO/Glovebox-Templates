import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Showingcars3Component } from './showingcars3.component';

describe('Showingcars3Component', () => {
  let component: Showingcars3Component;
  let fixture: ComponentFixture<Showingcars3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Showingcars3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Showingcars3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
