import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicantoOptionsAvailableComponent } from './picanto-options-available.component';

describe('PicantoOptionsAvailableComponent', () => {
  let component: PicantoOptionsAvailableComponent;
  let fixture: ComponentFixture<PicantoOptionsAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicantoOptionsAvailableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicantoOptionsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
