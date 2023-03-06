import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsModule } from 'app/features/products/products.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsSingleComponent } from '../products-single/products-single.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    ProductsComponent,
    ProductsSingleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, MainLayoutRoutingModule, ProductsModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
