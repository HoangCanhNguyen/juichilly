import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ResizeObserver } from 'resize-observer';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit, AfterViewInit {
  @ViewChild('faqs') faqContainer: ElementRef;

  screenWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {

    this.adjustMarginTop();

    const resizeObservable$ = fromEvent(window, 'resize');
    resizeObservable$.subscribe((event: any) => {
      this.screenWidth = event.target.innerWidth;
      this.adjustMarginTop()
    })
  }

  adjustMarginTop() {
    const adBanner = document.querySelector('.ad-banner') as any;

    const observer = new ResizeObserver(entries => {
      const height = entries[0].contentRect.height;

      if (this.screenWidth > 576) {
        adBanner.style.marginTop = height - 350 + 'px';
      }
      else {
        adBanner.style.marginTop = height - 200 + 'px';
      }
    });

    observer.observe(this.faqContainer.nativeElement);
  }

}
