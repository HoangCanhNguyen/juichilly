import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';
import { filter } from "rxjs/operators/";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-rect',
  templateUrl: './products-rect.component.html',
  styleUrls: ['./products-rect.component.css'],
})
export class ProductsRectComponent implements OnInit, OnDestroy {
  @Input() product: any = [];
  itemAmount = 1;
  totalPrice = 60000;

  cartSub: Subscription;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(cart => {
      if (cart) {
        console.log(cart);
      }
    })
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }

  onAddingToCart(): void {
    this.cartService.addToCart(this.product, this.itemAmount, this.totalPrice);
    this.router.navigate(['/cart'])
  }

  increaseByOne() {
    this.itemAmount++;
    this.totalPrice = this.itemAmount * this.product.price;
  }

  decreaseByOne() {
    this.itemAmount--;
    this.totalPrice = this.itemAmount * this.product.price;
  }
}
