import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

import { Product } from './product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productOld$ = new ReplaySubject<Product>(1);
  productTest$ = new Subject<Product>();
  productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.init();
  }

  getProducts() {
    return this.http
      .get<Product[]>('https://fakestoreapi.com/products')
      .subscribe((products) => {
        this.productTest$.next(products[0]);
        this.productsSubject.next(products);
      });
  }

  getProductById(id: number) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }

  getProductsByCategory(category: string) {
    return this.http.get<Product[]>(
      `http://localhost:4010/products?category=${category}`
    );
  }

  init() {
    this.getProducts();
  }
}
