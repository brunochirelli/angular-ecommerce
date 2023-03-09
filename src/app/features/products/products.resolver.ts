import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Product } from './product.type';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<Product[]> {
  constructor(private productsService: ProductsService) {}

  resolve(): Observable<Product[]> {
    return this.productsService.getProducts().pipe(map((products) => products));
  }
}
