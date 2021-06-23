import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent implements OnInit {
  public products = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }
}
