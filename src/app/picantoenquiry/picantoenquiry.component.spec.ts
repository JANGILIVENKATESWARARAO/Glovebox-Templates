import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicantoenquiryComponent } from './picantoenquiry.component';

describe('PicantoenquiryComponent', () => {
  let component: PicantoenquiryComponent;
  let fixture: ComponentFixture<PicantoenquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicantoenquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicantoenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
