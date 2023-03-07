import { Component, Input } from '@angular/core';
import { CartService } from 'app/features/cart/cart.service';

import { Product } from '../../product.type';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product | null;

  constructor(private cartService: CartService) {}

  addToCart() {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}
