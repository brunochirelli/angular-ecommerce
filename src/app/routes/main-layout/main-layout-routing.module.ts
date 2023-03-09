import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartGuard } from 'app/features/cart/cart.guard';
import { CategoryResolver } from 'app/features/products/category.resolver';
import { ProductResolver } from 'app/features/products/product.resolver';
import { UserGuard } from 'app/features/user/user.guard';

import { AuthenticationComponent } from '../authentication/authentication.component';
import { CartComponent } from '../cart/cart/cart.component';
import { HomeComponent } from '../home/home.component';
import { Page404Component } from '../page404/page404.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsCategoryComponent } from '../products-category/products-category.component';
import { ProductsSingleComponent } from '../products-single/products-single.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductsSingleComponent,
    resolve: {
      product: ProductResolver,
    },
  },
  {
    path: 'categories/:category',
    component: ProductsCategoryComponent,
    resolve: {
      products: CategoryResolver,
    },
  },
  { path: 'authentication', component: AuthenticationComponent },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [UserGuard],
    canDeactivate: [CartGuard],
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
