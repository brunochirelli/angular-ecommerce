import { Component } from '@angular/core';
import { Product } from 'app/features/products/product.type';
import { ProductsService } from 'app/features/products/products.service';
import { map, Observable } from 'rxjs';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productsViewed: Product[] = [];
  count = 0;
  prod$: Observable<Product> = this.productsService.productTest$;
  prodOld$: Observable<Product> = this.productsService.productOld$;
  products$: Observable<Product[]> = this.productsService.products$.pipe(
    map((products: Product[]) => products.slice(0, 4))
  );

  constructor(private productsService: ProductsService) {
    this.productsService.productOld$.subscribe((product) => {
      this.productsViewed = [...this.productsViewed, product];
      console.log(this.productsViewed);
    });
  }

  getNextProduct() {
    this.products$.subscribe((products) => {
      this.productsService.productOld$.next(products[this.count]);
      this.count++;
      this.productsService.productTest$.next(products[this.count]);
    });
  }
}
