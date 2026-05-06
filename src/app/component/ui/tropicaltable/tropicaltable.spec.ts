import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tropicaltable } from './tropicaltable';

describe('Tropicaltable', () => {
  let component: Tropicaltable;
  let fixture: ComponentFixture<Tropicaltable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tropicaltable],
    }).compileComponents();

    fixture = TestBed.createComponent(Tropicaltable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
