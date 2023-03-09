import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

import { Product } from './product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsSubject = new BehaviorSubject<Product[]>([]);
  categoriesSubject = new BehaviorSubject<string[]>([]);

  productOld$ = new ReplaySubject<Product>(1);

  products$ = this.productsSubject.asObservable();
  categories$ = this.categoriesSubject.asObservable();

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
      `https://fakestoreapi.com/products/category/${category}`
    );
  }

  getCategories() {
    return this.http
      .get<string[]>('https://fakestoreapi.com/products/categories')
      .subscribe((categories) => {
        this.categoriesSubject.next(categories);
      });
  }

  init() {
    this.getProducts();
    this.getCategories();
  }
}
