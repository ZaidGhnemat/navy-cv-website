import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavyLife } from './navy-life';

describe('NavyLife', () => {
  let component: NavyLife;
  let fixture: ComponentFixture<NavyLife>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavyLife],
    }).compileComponents();

    fixture = TestBed.createComponent(NavyLife);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
