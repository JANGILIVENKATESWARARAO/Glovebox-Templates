import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotabilityheroComponent } from './motabilityhero.component';

describe('MotabilityheroComponent', () => {
  let component: MotabilityheroComponent;
  let fixture: ComponentFixture<MotabilityheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotabilityheroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotabilityheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
