import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignSystemModule } from 'app/design-system/design-system.module';
import { CartModule } from 'app/features/cart/cart.module';
import { ProductsModule } from 'app/features/products/products.module';
import { CategoryResolver } from 'app/features/products/resolvers/category.resolver';
import { ProductResolver } from 'app/features/products/resolvers/product.resolver';
import { UserModule } from 'app/features/user/user.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { CartComponent } from '../cart/cart/cart.component';
import { HomeComponent } from '../home/home.component';
import { Page404Component } from '../page404/page404.component';
import { Page500Component } from '../page500/page500.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsCategoryComponent } from '../products-category/products-category.component';
import { ProductsSingleComponent } from '../products-single/products-single.component';

const pages = [
  AuthenticationComponent,
  HomeComponent,
  ProductsComponent,
  ProductsSingleComponent,
  ProductsCategoryComponent,
  CartComponent,
  Page404Component,
  Page500Component,
];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    ...pages,
  ],
  imports: [
    DesignSystemModule,
    CommonModule,
    MainLayoutRoutingModule,
    ProductsModule,
    UserModule,
    CartModule,
    NgOptimizedImage,
  ],
  exports: [MainLayoutComponent],
  providers: [ProductResolver, CategoryResolver],
})
export class MainLayoutModule {}
