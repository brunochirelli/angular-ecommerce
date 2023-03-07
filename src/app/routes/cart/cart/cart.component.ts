import { Component } from '@angular/core';
import { CartService } from 'app/features/cart/cart.service';
import { CartProduct } from 'app/features/cart/cart.type';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartTotalPrice: number | undefined = 0;
  cartItems: CartProduct[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe((cart) => {
      this.cartItems = cart.products;
    });

    this.cartService.cartTotalPrice$.subscribe((totalPrice) => {
      this.cartTotalPrice = totalPrice;
    });
  }

  changeItemQuantity(product: CartProduct, quantity: 'add' | 'remove') {
    this.cartService.changeItemQuantity(product, quantity);
  }

  removeItem(product: CartProduct) {
    this.cartService.removeItem(product);
  }
}
