import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';

const components = [HeroBannerComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class DesignSystemModule {}
