import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsModule } from 'app/features/products/products.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, MainLayoutRoutingModule, ProductsModule],
})
export class MainLayoutModule {}
