import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingcarsComponent } from './showingcars.component';

describe('ShowingcarsComponent', () => {
  let component: ShowingcarsComponent;
  let fixture: ComponentFixture<ShowingcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowingcarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowingcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
