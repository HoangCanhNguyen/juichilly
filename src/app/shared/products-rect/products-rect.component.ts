import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { filter } from "rxjs/operators/";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-rect',
  templateUrl: './products-rect.component.html',
  styleUrls: ['./products-rect.component.css'],
})
export class ProductsRectComponent implements OnInit, OnDestroy {
  @Input() product: any;
  @Input() additionalClass: string;

  // itemAmount = 1;
  // totalPrice = 60000;

  cartSub: Subscription;
  cart = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.pipe(filter(cart => !!cart)).subscribe(cart => {
      this.cart = cart;
      const itemInCart = this.cart.find(item => item.product.title === this.product.title);
      if (itemInCart) {
        this.product.itemAmount = itemInCart.amount;
        this.product.totalPrice = itemInCart.totalPrice;
      }
    })
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }

  onAddingToCart(): void {
    this.updateCart();
    this.router.navigate(['/cart']);
  }

  onRemovingFromCart(): void {
    this.cartService.removeItem(this.product)
  }

  increaseByOne() {
    this.product.itemAmount++;
    this.product.totalPrice = this.product.itemAmount * this.product.price;

    this.updateCart();
  }

  decreaseByOne() {
    this.product.itemAmount--;
    this.product.totalPrice = this.product.itemAmount * this.product.price;

    this.updateCart()
  }

  updateCart(): void {
    const newItem = {
      amount: this.product.itemAmount,
      totalPrice: this.product.totalPrice,
      product: this.product
    }
    this.cartService.addToCart(newItem);
  }
}
