import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPerksComponent } from './our-perks.component';

describe('OurPerksComponent', () => {
  let component: OurPerksComponent;
  let fixture: ComponentFixture<OurPerksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPerksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
