import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogData = [
    {
      title: 'Nước Uống Đẹp Da - TOP 10 Nước Uống Chống Lão Hóa 2021',
      thumbUrl: '../../../assets/blog/blog-1-thumb.png',
      blogId: 'blog-4'
    },
    {
      title: 'Nước Uống Giảm Cân - TOP 16 Công Thức Hiệu Quả 2021',
      thumbUrl: '../../../assets/blog/blog-2-thumb.png',
      blogId: 'blog-5'
    },
    {
      title: 'Nước Ép Cam - TOP 8 Công Thức Da Sáng. Dáng Khỏe 2021',
      thumbUrl: '../../../assets/blog/blog-3-thumb.png',
      blogId: 'blog-3'
    },
    {
      title: 'Nước Ép Hoa Quả - 13 Công Thức Tốt Cho Sức Khỏe 2021',
      thumbUrl: '../../../assets/blog/blog-4-thumb.png',
      blogId: 'blog-6'
    },
    {
      title: 'Nước Ép Rau Củ - [ TOP 10 Công Thức ] Dành Cho Người Mới',
      thumbUrl: '../../../assets/blog/blog-5-thumb.png',
      blogId: 'blog-1'
    },
    {
      title: 'Các Loại Nước Ép Tốt Cho Sức Khỏe - TOP 10 Công Thức',
      thumbUrl: '../../../assets/blog/blog-6-thumb.png',
      blogId: 'blog-2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
