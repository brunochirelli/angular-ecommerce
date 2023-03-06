import { Component, Input } from '@angular/core';

import { Product } from '../../types/product.type';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css'],
})
export class ProductsCarouselComponent {
  @Input() products: Product[] | null = [];
}
