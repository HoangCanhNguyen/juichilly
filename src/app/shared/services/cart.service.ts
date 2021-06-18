import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>(null);
  cart$ = this.cartSubject.asObservable();
  cart = [];

  constructor() { }

  addToCart(item: Product, amount: number, totalPrice: number) {
    let itemID = Math.random().toString().substr(0, 5);
    const newItem = { id: itemID, item: { ...item }, amount: amount, totalPrice: totalPrice };
    this.cart.push(newItem);
    this.cartSubject.next(this.cart);
  }
}
