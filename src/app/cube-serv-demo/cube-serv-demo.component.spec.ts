import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeServDemoComponent } from './cube-serv-demo.component';

describe('CubeServDemoComponent', () => {
  let component: CubeServDemoComponent;
  let fixture: ComponentFixture<CubeServDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeServDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeServDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
