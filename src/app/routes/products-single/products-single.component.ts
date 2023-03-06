import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'app/features/products/products.service';
import { Product } from 'app/features/products/types/product.type';

@Component({
  templateUrl: './products-single.component.html',
  styleUrls: ['./products-single.component.css'],
})
export class ProductsSingleComponent {
  currentProduct: Product | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
    this.productsService
      .getProductById(route.snapshot.params['id'])
      .subscribe((product) => {
        this.currentProduct = product;
      });
  }
}
