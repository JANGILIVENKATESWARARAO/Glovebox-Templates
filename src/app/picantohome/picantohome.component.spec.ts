import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicantohomeComponent } from './picantohome.component';

describe('PicantohomeComponent', () => {
  let component: PicantohomeComponent;
  let fixture: ComponentFixture<PicantohomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicantohomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicantohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
