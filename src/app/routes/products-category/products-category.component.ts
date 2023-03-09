import { Component, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/features/products/product.type';

@Component({
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css'],
})
export class ProductsCategoryComponent implements DoCheck {
  categoryName!: string;
  categoryProducts!: Product[];

  constructor(private route: ActivatedRoute) {}

  ngDoCheck(): void {
    this.categoryProducts = this.route.snapshot.data['products'];
    this.categoryName = this.categoryProducts[0].category;
  }
}
