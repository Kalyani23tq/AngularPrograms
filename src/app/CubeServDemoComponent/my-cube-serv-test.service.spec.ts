import { TestBed } from '@angular/core/testing';

import { MyCubeServTestService } from './my-cube-serv-test.service';

describe('MyCubeServTestService', () => {
  let service: MyCubeServTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCubeServTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
