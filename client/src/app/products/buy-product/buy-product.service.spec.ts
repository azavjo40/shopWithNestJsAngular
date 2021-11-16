import { TestBed } from '@angular/core/testing';

import { BuyProductService } from './buy-product.service';

describe('BuyProductService', () => {
  let service: BuyProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
