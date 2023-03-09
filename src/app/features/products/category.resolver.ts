import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { map, Observable } from 'rxjs';

import { Product } from './product.type';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryResolver implements Resolve<Product[]> {
  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.productsService
      .getProductsByCategory(route.params['category'])
      .pipe(map((products) => products));
  }
}
