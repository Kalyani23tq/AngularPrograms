import { TestBed } from '@angular/core/testing';

import { ServiceGlobleDemoService } from './service-globle-demo.service';

describe('ServiceGlobleDemoService', () => {
  let service: ServiceGlobleDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGlobleDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
