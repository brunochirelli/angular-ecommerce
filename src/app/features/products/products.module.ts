import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';

const components = [ProductCardComponent, ProductsCarouselComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class ProductsModule {}
