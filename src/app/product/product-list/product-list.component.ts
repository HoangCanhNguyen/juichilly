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
    {
      imgUrl:
        'assets/product-square/192562688_554548855900800_3050583163492913152_n.png',
      title: 'Hoa quả tổng hợp',
      description: '+ Bổ sung Vitamin',
      rating_amount: 7,
      font_color: 'cl-green-dark',
      button_color: 'btn-green-dark',
      add_button: 'color: #4c7838',
      price: 60000
    },
    {
      imgUrl:
        'assets/product-square/193495009_1271621746567904_1028851441032002058_n.png',
      title: 'Cam Chanh',
      description: '+ Tăng cường sức đề kháng',
      rating_amount: 81,
      font_color: 'cl-green',
      button_color: 'btn-green',
      add_button: 'color: #79b152',
      price: 60000
    },
    {
      imgUrl:
        'assets/product-square/190591659_973929896714050_4149720283071173334_n.png',
      title: 'Cam',
      description: '+ Bổ sung Vitamin',
      rating_amount: 23,
      font_color: 'cl-orange-light',
      button_color: 'btn-orange',
      add_button: 'color: #f68c29',
      price: 60000
    },
  ];

  public products2: any = [
    {
      imgUrl:
        'assets/product-square/192592306_3004283986471432_4170049171730553425_n.png',
      title: 'Cam Lựu',
      description: '+ Năng lượng',
      rating_amount: 25,
      font_color: 'cl-pink-dark',
      button_color: 'btn-pink-dark',
      add_button: 'color: #7f0d4c',
      price: 60000
    },
    {
      imgUrl:
        'assets/product-square/190591659_973929896714050_4149720283071173334_n.png',
      title: 'Cam Đỏ',
      description: '+ Năng lượng',
      rating_amount: 15,
      font_color: 'cl-pink',
      button_color: 'btn-pink',
      add_button: 'color: #D5394B',
      price: 60000
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
