import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeTable } from './landscape-table';

describe('LandscapeTable', () => {
  let component: LandscapeTable;
  let fixture: ComponentFixture<LandscapeTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandscapeTable],
    }).compileComponents();

    fixture = TestBed.createComponent(LandscapeTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
