import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'app/features/cart/cart.service';
import { Product } from 'app/features/products/product.type';
import { ProductsService } from 'app/features/products/products.service';

@Component({
  templateUrl: './products-single.component.html',
  styleUrls: ['./products-single.component.css'],
})
export class ProductsSingleComponent implements OnInit {
  currentProduct: Product | undefined;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    /**
     * The constructor is a Typescript feature used to instantiate the
     * Typescript class. In most Angular projects about the only thing that
     * should ever be done in the constructor is to inject services. The
     * ngOnInit function is specific to the Angular framework and is called when
     * Angular is done creating the component.
     */
  }

  ngOnInit(): void {
    this.productsService
      .getProductById(this.route.snapshot.params['id'])
      .subscribe((product) => {
        this.currentProduct = product;
      });
  }

  addToCart(): void {
    if (this.currentProduct) {
      this.cartService.addToCart(this.currentProduct);
    }
  }
}
