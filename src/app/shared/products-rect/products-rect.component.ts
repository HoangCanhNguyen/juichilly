import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-rect',
  templateUrl: './products-rect.component.html',
  styleUrls: ['./products-rect.component.css'],
})
export class ProductsRectComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.product.color === 'pink-dark') {
      document.getElementById('title_1').classList.add('cl-pink-dark');
      document
        .getElementById(`description_${this.product.id}`)
        .classList.add('cl-pink-dark');
      document
        .getElementById(`rating_${this.product.id}`)
        .classList.add('cl-pink-dark');
      document
        .getElementById(`btn_${this.product.id}`)
        .classList.add('btn-pink-dark');
      document.getElementById(`plus_${this.product.id}`).style.color =
        '#7f0d4c';
      document.getElementById(`minus_${this.product.id}`).style.color =
        '#7f0d4c';
    } else if (this.product.color === 'orange-light') {
      document
        .getElementById(`title_${this.product.id}`)
        .classList.add('cl-orange-light');
      document
        .getElementById(`description_${this.product.id}`)
        .classList.add('cl-orange-light');
      document
        .getElementById(`rating_${this.product.id}`)
        .classList.add('cl-orange-light');
      document
        .getElementById(`btn_${this.product.id}`)
        .classList.add('btn-orange');
      document.getElementById(`plus_${this.product.id}`).style.color =
        '#f68c29';
      document.getElementById(`minus_${this.product.id}`).style.color =
        '#f68c29';
    } else if (this.product.color === 'green-light') {
      document
        .getElementById(`title_${this.product.id}`)
        .classList.add('cl-green');
      document
        .getElementById(`description_${this.product.id}`)
        .classList.add('cl-green');
      document
        .getElementById(`rating_${this.product.id}`)
        .classList.add('cl-green');
      document
        .getElementById(`btn_${this.product.id}`)
        .classList.add('btn-green');
      document.getElementById(`plus_${this.product.id}`).style.color =
        '#79b152';
      document.getElementById(`minus_${this.product.id}`).style.color =
        '#79b152';
    } else if (this.product.color === 'pink') {
      document
        .getElementById(`title_${this.product.id}`)
        .classList.add('cl-pink');
      document
        .getElementById(`description_${this.product.id}`)
        .classList.add('cl-pink');
      document
        .getElementById(`rating_${this.product.id}`)
        .classList.add('cl-pink');
      document
        .getElementById(`btn_${this.product.id}`)
        .classList.add('btn-pink');
      document.getElementById(`plus_${this.product.id}`).style.color =
        '#d5394b';
      document.getElementById(`minus_${this.product.id}`).style.color =
        '#d5394b';
    } else {
      document
        .getElementById(`title_${this.product.id}`)
        .classList.add('cl-green-dark');
      document
        .getElementById(`description_${this.product.id}`)
        .classList.add('cl-green-dark');
      document
        .getElementById(`rating_${this.product.id}`)
        .classList.add('cl-green-dark');
      document
        .getElementById(`btn_${this.product.id}`)
        .classList.add('btn-green-dark');
      document.getElementById(`plus_${this.product.id}`).style.color =
        '#4c7838';
      document.getElementById(`minus_${this.product.id}`).style.color =
        '#4c7838';
    }
  }
}

export interface Product {
  id?: number;
  title: string;
  imageUrl: string;
  short_description: string;
  rating_amount: number;
  color?: string;
}
