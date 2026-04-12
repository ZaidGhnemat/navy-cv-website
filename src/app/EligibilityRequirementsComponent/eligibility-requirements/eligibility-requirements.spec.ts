import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityRequirements } from './eligibility-requirements';

describe('EligibilityRequirements', () => {
  let component: EligibilityRequirements;
  let fixture: ComponentFixture<EligibilityRequirements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EligibilityRequirements],
    }).compileComponents();

    fixture = TestBed.createComponent(EligibilityRequirements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
