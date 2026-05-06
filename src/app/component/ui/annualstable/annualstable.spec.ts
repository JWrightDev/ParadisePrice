import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annualstable } from './annualstable';

describe('Annualstable', () => {
  let component: Annualstable;
  let fixture: ComponentFixture<Annualstable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Annualstable],
    }).compileComponents();

    fixture = TestBed.createComponent(Annualstable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
