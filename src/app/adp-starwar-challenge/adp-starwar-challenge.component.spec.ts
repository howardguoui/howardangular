import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdpStarwarChallengeComponent } from './adp-starwar-challenge.component';

describe('CharacterSelectionComponent', () => {
  let component: AdpStarwarChallengeComponent;
  let fixture: ComponentFixture<AdpStarwarChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdpStarwarChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdpStarwarChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
