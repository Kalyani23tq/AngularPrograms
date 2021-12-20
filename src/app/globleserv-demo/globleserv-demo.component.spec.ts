import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobleservDemoComponent } from './globleserv-demo.component';

describe('GlobleservDemoComponent', () => {
  let component: GlobleservDemoComponent;
  let fixture: ComponentFixture<GlobleservDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobleservDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobleservDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
