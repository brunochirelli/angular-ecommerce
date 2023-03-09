import { TestBed } from '@angular/core/testing';

import { ProductResolver } from './product.resolver';

describe('ProductsResolver', () => {
  let resolver: ProductResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
