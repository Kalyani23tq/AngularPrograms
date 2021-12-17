import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDirectiveDemo2Component } from './for-directive-demo2.component';

describe('ForDirectiveDemo2Component', () => {
  let component: ForDirectiveDemo2Component;
  let fixture: ComponentFixture<ForDirectiveDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForDirectiveDemo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDirectiveDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
