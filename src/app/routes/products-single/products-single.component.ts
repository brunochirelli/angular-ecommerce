import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'app/features/cart/cart.service';
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
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.productsService
      .getProductById(this.route.snapshot.params['id'])
      .subscribe((product) => {
        this.currentProduct = product;
      });
  }

  addToCart(): void {
    if (this.currentProduct) {
      this.cartService.addToCart(this.currentProduct);
    }
  }
}
