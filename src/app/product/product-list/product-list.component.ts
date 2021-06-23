import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products = [

  ];

  public products2: any = [

  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts().slice(0, 3);
    this.products2 = this.cartService.getProducts().slice(3)
  }
}
