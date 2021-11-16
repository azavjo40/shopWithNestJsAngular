import { TestBed } from '@angular/core/testing';

import { BasketProductsService } from './basket-products.service';

describe('BasketProductsService', () => {
  let service: BasketProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
