import { Component } from '@angular/core';
import { ProductsService } from 'app/features/products/products.service';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products$ = this.productsService.products$;

  constructor(private productsService: ProductsService) {}
}
