import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pricetable } from './pricetable';

describe('Pricetable', () => {
  let component: Pricetable;
  let fixture: ComponentFixture<Pricetable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pricetable],
    }).compileComponents();

    fixture = TestBed.createComponent(Pricetable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
