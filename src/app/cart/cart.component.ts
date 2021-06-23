import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterViewInit, OnDestroy {

  cartEmpty: boolean;
  isOrderSuccess = false;
  totalItems = 0;
  totalPrice = 0;

  cartSub: Subscription;
  cart = [];

  voucherInput: string;
  voucherMsg: string;
  isVoucherCorrect = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartSub = this.cartService.cart$.subscribe(cart => {
      this.cart = cart;

      const itemAmountArr = this.cart.map((item: any) => item.amount);
      this.totalItems = itemAmountArr.reduce((a, b) => a + b, 0);

      const priceArr = this.cart.map((item: any) => item.totalPrice);
      this.totalPrice = priceArr.reduce((a, b) => a + b, 0)

      if (this.cart.length > 0) {
        this.cartEmpty = false;
      } else {
        this.cartEmpty = true;
      }
    })
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  checkVoucher(event: any): void {
    this.voucherInput = event.target.value;
  }

  applyVoucher(): void {
    if (this.voucherInput === 'juichilly') {
      this.voucherMsg = 'Áp dụng thành công! Bạn được giảm 50% giá trị đơn hàng';
      this.isVoucherCorrect = true;
    } else {
      this.voucherMsg = 'Mã giảm giá không hợp lệ!'
      this.isVoucherCorrect = false;
    }
  }

  onOrderSuccess() {
    this.isOrderSuccess = true;
    this.cartEmpty = true;
    this.cartService.clearCart();
  }

}
