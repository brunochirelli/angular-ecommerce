import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';

import { Product } from '../product.type';
import { ProductsService } from '../products.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryResolver implements Resolve<Product[]> {
  constructor(private productsService: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {
    return this.productsService
      .getProductsByCategory(route.params['category'])
      .pipe(map((products) => products));
  }
}
