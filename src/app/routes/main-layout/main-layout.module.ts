import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsModule } from 'app/features/products/products.module';
import { UserModule } from 'app/features/user/user.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsSingleComponent } from '../products-single/products-single.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MainLayoutComponent,
    ProductsComponent,
    ProductsSingleComponent,
  ],
  imports: [CommonModule, MainLayoutRoutingModule, ProductsModule, UserModule],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
