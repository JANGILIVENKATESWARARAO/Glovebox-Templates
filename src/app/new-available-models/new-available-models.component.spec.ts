import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAvailableModelsComponent } from './new-available-models.component';

describe('NewAvailableModelsComponent', () => {
  let component: NewAvailableModelsComponent;
  let fixture: ComponentFixture<NewAvailableModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAvailableModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAvailableModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
