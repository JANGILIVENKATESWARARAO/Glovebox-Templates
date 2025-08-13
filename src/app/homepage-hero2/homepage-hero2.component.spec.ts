import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHero2Component } from './homepage-hero2.component';

describe('HomepageHero2Component', () => {
  let component: HomepageHero2Component;
  let fixture: ComponentFixture<HomepageHero2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageHero2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageHero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
