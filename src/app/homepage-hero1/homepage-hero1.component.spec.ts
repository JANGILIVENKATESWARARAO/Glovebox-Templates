import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHero1Component } from './homepage-hero1.component';

describe('HomepageHero1Component', () => {
  let component: HomepageHero1Component;
  let fixture: ComponentFixture<HomepageHero1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageHero1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageHero1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
