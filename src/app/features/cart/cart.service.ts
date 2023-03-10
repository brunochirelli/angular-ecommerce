import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Cart } from './cart.type';
import { Product } from '../products/product.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartTotalItemsSubject = new BehaviorSubject<number>(0);
  cartTotalPriceSubject = new BehaviorSubject<number>(0);

  cartSubject = new BehaviorSubject<Cart>({
    id: undefined,
    userId: undefined,
    products: [],
    total: 0,
  });

  cart$ = this.cartSubject.asObservable();
  cartTotalItems$ = this.cartTotalItemsSubject.asObservable();
  cartTotalPrice$ = this.cartTotalPriceSubject.asObservable();

  constructor() {
    this.init();
  }

  setupCart() {
    this.cartSubject.next({
      id: 1,
      userId: 1,
      products: [],
    });
  }

  addToCart(product: Product) {
    const cart = this.cartSubject.getValue();

    // Find if item is already in the cart
    const productIndex = cart.products.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIndex !== -1) {
      cart.products[productIndex].quantity += 1;
      this.cartSubject.next(cart);
      return;
    }

    this.cartSubject.next({
      ...cart,
      products: [
        ...cart.products,
        {
          ...product,
          quantity: 1,
        },
      ],
    });
  }

  updateCartItemsQuantity() {
    this.cart$.subscribe((cart) => {
      this.cartTotalItemsSubject.next(
        cart.products.reduce((acc, product) => acc + product.quantity, 0)
      );
    });
  }

  updateCartTotalPrice() {
    this.cart$.subscribe((cart) => {
      this.cartTotalPriceSubject.next(
        cart.products.reduce(
          (acc, product) => acc + product.price * product.quantity,
          0
        )
      );
    });
  }

  changeItemQuantity(product: Product, quantity: 'add' | 'remove') {
    const cart = this.cartSubject.getValue();

    // Find the product to be updated
    const productIndex = cart.products.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );
    const currentProduct = cart.products[productIndex];

    if (currentProduct.quantity === 1 && quantity === 'remove') {
      this.removeItem(currentProduct);
      return;
    }

    // Update the quantity of the product
    if (quantity === 'add') {
      currentProduct.quantity += 1;
    }

    if (quantity === 'remove') {
      currentProduct.quantity -= 1;
    }

    // Update the cartSubject with new cart state
    // which will notify every subscriber
    this.cartSubject.next({
      ...cart,
    });
  }

  removeItem(product: Product) {
    const cart = this.cartSubject.getValue();

    this.cartSubject.next({
      ...cart,
      products: cart.products.filter(
        (cartProduct) => cartProduct.id !== product.id
      ),
    });
  }

  init() {
    this.setupCart();
    this.cart$.subscribe(() => {
      this.updateCartItemsQuantity();
      this.updateCartTotalPrice();
    });
  }
}
