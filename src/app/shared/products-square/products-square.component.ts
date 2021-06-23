import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper/core';
import { CartService } from '../services/cart.service';
SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-products-square',
  templateUrl: './products-square.component.html',
  styleUrls: ['./products-square.component.css']
})
export class ProductsSquareComponent implements OnInit {
  public stars = 5;
  public products = [];

  breakpoints = {
    0: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
  };

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.cartService.getProducts();
  }

  onAddingToCart(product: any): void {
    this.updateCart(product);
    this.router.navigate(['/cart']);
  }


  increaseByOne(product: any) {
    product.itemAmount++;
    product.totalPrice = product.itemAmount * product.price;

    this.updateCart(product);
  }

  decreaseByOne(product: any) {
    product.itemAmount--;
    product.totalPrice = product.itemAmount * product.price;

    this.updateCart(product)
  }

  updateCart(product: any): void {
    const newItem = {
      amount: product.itemAmount,
      totalPrice: product.totalPrice,
      product: product
    }
    this.cartService.addToCart(newItem);
  }

}
