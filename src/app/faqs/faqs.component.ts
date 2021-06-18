import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeObserver } from 'resize-observer';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit, AfterViewInit {
  @ViewChild('faqs') faqContainer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const adBanner = document.querySelector('.ad-banner') as any;

    const observer = new ResizeObserver(entries => {
      const height = entries[0].contentRect.height;
      adBanner.style.marginTop = height - 350 + 'px';
    });

    observer.observe(this.faqContainer.nativeElement);
  }

}
