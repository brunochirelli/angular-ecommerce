import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from '../authentication/authentication.component';
import { CartComponent } from '../cart/cart/cart.component';
import { HomeComponent } from '../home/home.component';
import { ProductsComponent } from '../products/products.component';
import { ProductsCategoryComponent } from '../products-category/products-category.component';
import { ProductsSingleComponent } from '../products-single/products-single.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [{ path: ':id', component: ProductsSingleComponent }],
  },
  {
    path: 'categories/:category',
    component: ProductsCategoryComponent,
  },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {}
