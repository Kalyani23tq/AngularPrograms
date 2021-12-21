import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpClientComponent } from './my-http-client.component';

describe('MyHttpClientComponent', () => {
  let component: MyHttpClientComponent;
  let fixture: ComponentFixture<MyHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHttpClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
