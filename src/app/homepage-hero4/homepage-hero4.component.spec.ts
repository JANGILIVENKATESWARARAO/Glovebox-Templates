import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHero4Component } from './homepage-hero4.component';

describe('HomepageHero4Component', () => {
  let component: HomepageHero4Component;
  let fixture: ComponentFixture<HomepageHero4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageHero4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageHero4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
