import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<any>([]);
  cart$ = this.cartSubject.asObservable();
  cart = [];

  constructor() { }

  addToCart(newItem: any) {
    const duplicateItemId = this.cart.findIndex(item => item.product.title === newItem.product.title);
    if (duplicateItemId > -1) {
      this.cart[duplicateItemId] = newItem;
    }
    else {
      this.cart.push(newItem);
    }

    this.cartSubject.next(this.cart);
  }

  removeItem(item: any) {
    const removedItemId = this.cart.findIndex(cartItem => cartItem.product.title === item.title);
    this.cart.splice(removedItemId, 1);
    this.cartSubject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next([]);
  }
}
