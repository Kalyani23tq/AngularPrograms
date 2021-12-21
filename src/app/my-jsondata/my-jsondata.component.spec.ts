import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJSONDataComponent } from './my-jsondata.component';

describe('MyJSONDataComponent', () => {
  let component: MyJSONDataComponent;
  let fixture: ComponentFixture<MyJSONDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJSONDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJSONDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
