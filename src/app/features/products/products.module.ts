import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { ProductsFeaturedComponent } from './components/products-featured/products-featured.component';

const components = [
  ProductCardComponent,
  ProductsCarouselComponent,
  ProductsFeaturedComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components],
})
export class ProductsModule {}
