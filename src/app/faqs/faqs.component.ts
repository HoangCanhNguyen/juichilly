import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const container = document.querySelector('.container');
    const adBanner = document.querySelector('.ad-banner') as any;
    adBanner.style.marginTop = container.clientHeight - 350 + 'px';
  }

}
