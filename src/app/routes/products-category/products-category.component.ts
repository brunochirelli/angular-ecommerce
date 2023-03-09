import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from 'app/features/products/product.type';
import { ProductsService } from 'app/features/products/products.service';

@Component({
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent {
  categoryName: string | undefined;
  categoryProducts: Product[] | undefined;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.productsService
          .getProductsByCategory(
            this.activatedRoute.snapshot.params['category']
          )
          .subscribe((products) => {
            if (products.length > 0) {
              this.categoryProducts = products;
              this.categoryName = products[0].category;
            } else {
              this.router.navigate(['/404']);
            }
          });
      }
    });
  }
}
