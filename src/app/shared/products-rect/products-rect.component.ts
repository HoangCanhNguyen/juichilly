import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-rect',
  templateUrl: './products-rect.component.html',
  styleUrls: ['./products-rect.component.css'],
})
export class ProductsRectComponent implements OnInit {
  @Input() product: any = [];

  constructor() {}

  ngOnInit(): void {}

}
