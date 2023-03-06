import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from './types/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsSubject = new BehaviorSubject<Product[]>([]);
  products$ = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.init();
  }

  getProducts() {
    return this.http
      .get<Product[]>('http://localhost:4010/products')
      .subscribe((products) => {
        this.productsSubject.next(products);
      });
  }

  getProductById(id: number) {
    return this.http.get<Product>(`http://localhost:4010/products/${id}`);
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
