import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motability4Component } from './motability4.component';

describe('Motability4Component', () => {
  let component: Motability4Component;
  let fixture: ComponentFixture<Motability4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motability4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Motability4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
