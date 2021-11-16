import { TestBed } from '@angular/core/testing';

import { AllProductServiceService } from './all-product-service.service';

describe('AllProductServiceService', () => {
  let service: AllProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
