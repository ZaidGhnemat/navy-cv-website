import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustSignals } from './trust-signals';

describe('TrustSignals', () => {
  let component: TrustSignals;
  let fixture: ComponentFixture<TrustSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrustSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(TrustSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
