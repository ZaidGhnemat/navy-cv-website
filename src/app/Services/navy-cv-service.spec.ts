import { TestBed } from '@angular/core/testing';

import { NavyCvService } from './navy-cv-service';

describe('NavyCvService', () => {
  let service: NavyCvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavyCvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
