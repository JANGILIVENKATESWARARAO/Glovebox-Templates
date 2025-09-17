import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolkswagenPoloComponent } from './volkswagen-polo.component';

describe('VolkswagenPoloComponent', () => {
  let component: VolkswagenPoloComponent;
  let fixture: ComponentFixture<VolkswagenPoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolkswagenPoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolkswagenPoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
