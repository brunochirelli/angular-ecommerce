import { Component } from '@angular/core';
import { ProductsService } from 'app/features/products/products.service';
import { Product } from 'app/features/products/types/product.type';
import { map, Observable } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products$: Observable<Product[]> = this.productsService.products$.pipe(
    map((products: Product[]) => products.slice(0, 4))
  );

  constructor(private productsService: ProductsService) {}
}
