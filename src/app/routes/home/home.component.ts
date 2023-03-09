import { Component, OnInit } from '@angular/core';
import { Product } from 'app/features/products/product.type';
import { ProductsService } from 'app/features/products/products.service';
import { map, Observable } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsViewed: Product[] = [];
  count = 0;
  prodOld$: Observable<Product> = this.productsService.productOld$;
  products$: Observable<Product[]> = this.productsService.products$.pipe(
    map((products: Product[]) => products.slice(0, 4))
  );

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.productOld$.subscribe((product) => {
      this.productsViewed = [...this.productsViewed, product];
    });
  }
}
