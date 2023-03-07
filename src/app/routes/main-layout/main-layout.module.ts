import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignSystemModule } from 'app/design-system/design-system.module';
import { CartModule } from 'app/features/cart/cart.module';
import { ProductsModule } from 'app/features/products/products.module';
import { UserModule } from 'app/features/user/user.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { CartComponent } from '../cart/cart/cart.component';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsCategoryComponent } from '../products-category/products-category.component';
import { ProductsSingleComponent } from '../products-single/products-single.component';

@NgModule({
  declarations: [
    AuthenticationComponent,
    CartComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MainLayoutComponent,
    ProductsComponent,
    ProductsSingleComponent,
    ProductsCategoryComponent,
  ],
  imports: [
    DesignSystemModule,
    CommonModule,
    MainLayoutRoutingModule,
    ProductsModule,
    UserModule,
    CartModule,
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule {}
