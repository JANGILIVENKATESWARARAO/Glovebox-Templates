import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsMotability1Component } from './what-is-motability1.component';

describe('WhatIsMotability1Component', () => {
  let component: WhatIsMotability1Component;
  let fixture: ComponentFixture<WhatIsMotability1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsMotability1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsMotability1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
