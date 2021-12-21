import { TestBed } from '@angular/core/testing';

import { MyJSONServService } from './my-jsonserv.service';

describe('MyJSONServService', () => {
  let service: MyJSONServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyJSONServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
