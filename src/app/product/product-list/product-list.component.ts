import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: any = [
    {
      title: 'Cam Lựu',
      short_description: '+ Năng lượng',
      rating_amount: 25,
      imageUrl: 'assets/images/camluu.png',
      color: 'pink-dark',
    },
    {
      title: 'Cam',
      short_description: '+ Bổ sung Vitamin',
      rating_amount: 23,
      imageUrl: 'assets/images/cam.png',
      color: 'orange-light',
    },
    {
      title: 'Cam Chanh',
      short_description: '+ Tăng cường sức đề kháng',
      rating_amount: 81,
      imageUrl: 'assets/images/camchanh.png',
      color: 'green-light',

    },
  ];

  public products2: any = [
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
