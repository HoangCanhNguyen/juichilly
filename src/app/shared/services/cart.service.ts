import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = [
    {
      id: 'a1',
      imgUrlSquare: "/assets/images/mix.png",
      imgUrlRect:
        'assets/product-square/192562688_554548855900800_3050583163492913152_n.png',
      title: "Hoa quả tổng hợp",
      description: "+ Bổ sung Vitamin",
      rating_amount: 7,
      font_color: "cl-green-dark",
      button_color: "btn-green-dark",
      add_button: "color: #4c7838",
      price: 60000,
      itemAmount: 1,
      totalPrice: 60000
    },
    {
      id: 'a2',
      imgUrlSquare: "/assets/images/lime.png",
      imgUrlRect:
        'assets/product-square/193495009_1271621746567904_1028851441032002058_n.png',
      title: "Cam Chanh",
      description: "+ Tăng cường sức đề kháng",
      rating_amount: 81,
      font_color: "cl-green",
      button_color: "btn-green",
      add_button: "color: #79b152",
      price: 60000,
      itemAmount: 1,
      totalPrice: 60000
    },
    {
      id: 'a3',
      imgUrlSquare: "/assets/images/oranges.png",
      imgUrlRect:
        'assets/product-square/194272926_4273789872652321_2119853971890393768_n.png',
      title: "Cam",
      description: "+ Bổ sung Vitamin",
      rating_amount: 23,
      font_color: "cl-orange-light",
      button_color: "btn-orange-light",
      add_button: "color: #f68c29",
      price: 60000,
      itemAmount: 1,
      totalPrice: 60000
    },
    {
      id: 'b1',
      imgUrlSquare: "/assets/images/camluusquare.png",
      imgUrlRect:
        'assets/product-square/192592306_3004283986471432_4170049171730553425_n.png',
      title: "Cam Lựu",
      description: "+ Năng lượng",
      rating_amount: 25,
      font_color: "cl-pink-dark",
      button_color: "btn-pink-dark ",
      add_button: "color: #7f0d4c",
      price: 60000,
      itemAmount: 1,
      totalPrice: 60000
    },
    {
      id: 'b2',
      imgUrlSquare: "/assets/images/camdosquare.png",
      imgUrlRect:
        'assets/product-square/190591659_973929896714050_4149720283071173334_n.png',
      title: "Cam Đỏ",
      description: "+ Năng lượng",
      rating_amount: 15,
      font_color: "cl-pink",
      button_color: "btn-pink",
      add_button: "color: #D5394B",
      price: 60000,
      itemAmount: 1,
      totalPrice: 60000
    }
  ];

  private cartSubject = new BehaviorSubject<any>([]);
  cart$ = this.cartSubject.asObservable();
  cart = [];

  constructor() { }

  getProducts() {
    return this.products;
  }

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
    const removedProductId = this.products.findIndex(product => product.id === item.id);
    this.products[removedProductId].itemAmount = 1;
    this.products[removedProductId].totalPrice = 60000;

    const removedItemId = this.cart.findIndex(cartItem => cartItem.product.title === item.title);
    this.cart.splice(removedItemId, 1);
    this.cartSubject.next(this.cart);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next([]);

    this.products.forEach(product => { product.itemAmount = 1; product.totalPrice = 60000 });
  }
}
