import { Component } from '@angular/core';
import { CartService } from 'app/features/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  cartItemsCount$ = this.cartService.cartTotalItems$;

  constructor(private cartService: CartService) {}
}
