import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/products-rect/products-rect.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [
    {
      id: 1,
      title: 'Cam Lựu',
      short_description: '+ Năng lượng',
      rating_amount: 25,
      imageUrl: 'assets/images/camluu.png',
      color: 'pink-dark',
    },
    {
      id: 2,
      title: 'Cam',
      short_description: '+ Bổ sung Vitamin',
      rating_amount: 23,
      imageUrl: 'assets/images/cam.png',
      color: 'orange-light',
    },
    {
      id: 3,
      title: 'Cam Chanh',
      short_description: '+ Tăng cường sức đề kháng',
      rating_amount: 81,
      imageUrl: 'assets/images/camchanh.png',
      color: 'green-light',

    },
  ];

  public products2: Product[] = [
    {
      id: 4,
      title: 'Cam Đỏ',
      short_description: '+ Năng lượng',
      rating_amount: 15,
      imageUrl: 'assets/images/camdo.png',
      color: 'pink',

    },
    {
      id: 5,
      title: 'Hoa quả tổng hợp',
      short_description: '+ Bổ sung Vitamin',
      rating_amount: 7,
      imageUrl: 'assets/images/mixfruit.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
