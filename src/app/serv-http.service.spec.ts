import { TestBed } from '@angular/core/testing';

import { ServHttpService } from './serv-http.service';

describe('ServHttpService', () => {
  let service: ServHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
