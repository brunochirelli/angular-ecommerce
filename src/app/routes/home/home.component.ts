import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/features/products/product.type';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsViewed: Product[] = [];
  count = 0;
  products!: Product[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.products = this.route.snapshot.data['products'];
  }
}
