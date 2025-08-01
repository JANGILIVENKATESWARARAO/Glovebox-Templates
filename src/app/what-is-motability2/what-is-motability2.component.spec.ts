import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsMotability2Component } from './what-is-motability2.component';

describe('WhatIsMotability2Component', () => {
  let component: WhatIsMotability2Component;
  let fixture: ComponentFixture<WhatIsMotability2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatIsMotability2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsMotability2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
