import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cartEmpty: boolean;
  isOrderSuccess = false;
  totalItems = 0;

  cartSub: Subscription;
  cart = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(cart => {
      this.cart = cart;

      const itemAmountArr = this.cart.map((item: any) => item.amount);
      this.totalItems = itemAmountArr.reduce((a, b) => a + b, 0);

      if (this.cart.length > 0) {
        this.cartEmpty = false;
      } else {
        this.cartEmpty = true;
      }
    })
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  onOrderSuccess() {
    this.isOrderSuccess = true;
    this.cartEmpty = true;
    this.cartService.clearCart();
  }

}
