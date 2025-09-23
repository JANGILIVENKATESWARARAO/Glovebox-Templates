import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoloGTIComponent } from './polo-gti.component';

describe('PoloGTIComponent', () => {
  let component: PoloGTIComponent;
  let fixture: ComponentFixture<PoloGTIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoloGTIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoloGTIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
