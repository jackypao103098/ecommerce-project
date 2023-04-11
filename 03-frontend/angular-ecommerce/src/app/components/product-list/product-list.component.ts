import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../common/product';
import { Component, OnInit } from '@angular/core';

type NewType = OnInit;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  // templateUrl: './product-list-table.component.html',
  // templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements NewType {
  [x: string]: any;
  products: Product[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
    });
  }
}
