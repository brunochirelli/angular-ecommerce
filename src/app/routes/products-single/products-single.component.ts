import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/features/products/product.type';
import { ProductsService } from 'app/features/products/products.service';

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
