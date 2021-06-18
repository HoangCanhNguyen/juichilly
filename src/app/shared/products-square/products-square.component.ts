import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper/core';
SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-products-square',
  templateUrl: './products-square.component.html',
  styleUrls: ['./products-square.component.css']
})
export class ProductsSquareComponent implements OnInit {
  public stars = 5;
  public products = [
    {
      imgUrl: "/assets/images/mix.png",
      title: "Hoa quả tổng hợp",
      description: "+ Bổ sung Vitamin",
      rating_amount: 7,
      font_color: "cl-green-dark",
      button_color: "btn-green-dark",
      add_button: "color: #4c7838"
    },
    {
      imgUrl: "/assets/images/lime.png",
      title: "Cam Chanh",
      description: "+ Tăng cường sức đề kháng",
      rating_amount: 81,
      font_color: "cl-green",
      button_color: "btn-green",
      add_button: "color: #79b152"
    },
    {
      imgUrl: "/assets/images/oranges.png",
      title: "Cam",
      description: "+ Bổ sung Vitamin",
      rating_amount: 23,
      font_color: "cl-orange-light",
      button_color: "btn-orange-light",
      add_button: "color: #f68c29"
    },
    {
      imgUrl: "/assets/images/camluusquare.png",
      title: "Cam Lựu",
      description: "+ Năng lượng",
      rating_amount: 25,
      font_color: "cl-pink-dark",
      button_color: "btn-pink-dark ",
      add_button: "color: #7f0d4c"
    },
    {
      imgUrl: "/assets/images/camdosquare.png",
      title: "Cam Đỏ",
      description: "+ Năng lượng",
      rating_amount: 15,
      font_color: "cl-pink",
      button_color: "btn-pink",
      add_button: "color: #D5394B"
    }
  ];

  breakpoints = {
    0: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
