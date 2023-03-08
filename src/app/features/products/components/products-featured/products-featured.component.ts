import { Component, Input } from '@angular/core';

import { Product } from '../../product.type';

@Component({
  selector: 'app-products-featured',
  templateUrl: './products-featured.component.html',
  styleUrls: ['./products-featured.component.css'],
})
export class ProductsFeaturedComponent {
  @Input() title!: string;
  @Input() products!: Product[] | null;
}
