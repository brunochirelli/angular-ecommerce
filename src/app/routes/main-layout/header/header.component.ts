import { Component } from '@angular/core';
import { CartService } from 'app/features/cart/cart.service';
import { ProductsService } from 'app/features/products/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartItemsCount$ = this.cartService.cartTotalItems$;
  categories$ = this.productsService.categories$;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}
}
