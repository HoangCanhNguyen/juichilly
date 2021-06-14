import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  promoData = [
    {
      title: 'GIẢM GIÁ 10%',
      thumbUrl: '../../assets/promotion/promotion-item-1.jpg',
      p1: 'Nước hoa quả đặc biệt thơm ngon, nhiều vị khác nhau đang có chương trình giảm 10% tại Juichilly',
      p2: 'Chương trình áp dụng hôm nay 01/06 - 26/06. Không áp dụng đồng thời với chương trình khuyến mãi khác.'
    },
    {
      title: 'SẢN PHẨM TẶNG KÈM',
      thumbUrl: '../../assets/promotion/promotion-item-2.jpg',
      p1: 'Khi mua 1 sản phẩm bất kì, tặng kèm thêm 1 món đồ lưu niệm riêng của cửa hàng chúng tôi.',
      p2: 'Chương trình áp dụng vô thời hạn. Không áp dụng đồng thời với chương trình khuyến mãi khác.'
    },
    {
      title: 'NGHỈ LỄ 30/04_01/05',
      thumbUrl: '../../assets/promotion/promotion-item-3.jpg',
      p1: 'Juichilly  xin thông báo cửa hàng nghỉ lễ từ 30/04-03/05, mở cửa lại vào thứ 2, ngày 04/05 ạ.',
      p2: 'Ngoài ra vẫn còn chương trình giảm 15% khi đặt Online tại Juichilly với mã THANG4.',
      p3: 'Các chương trình không áp dụng đồng thời. Cảm ơn quý khách :)'
    },
    {
      title: 'VOCHER',
      thumbUrl: '../../assets/promotion/promotion-item-4.jpg',
      p1: 'Xin thông báo: từ 18/11 Juichilly thay đổi nhiều package sản phẩm xanh sạch, thân thiện với môi trường hơn. Tùy loại có thay đổi và giá cũng có chút thay đổi.',
      p2: 'Đặt Online giảm 15% đến hết 30/11 với mã GOGREEN. Rất mong nhận được sự đồng hành của quý khách.'
    },
    {
      title: 'TRI ÂN KHÁCH HÀNG',
      thumbUrl: '../../assets/promotion/promotion-item-5.jpg',
      p1: 'Xin dành tặng 1 bộ sản phẩm văn phòng trị giá 400k với khách hàng từng đặt hàng tại Juichilly, nay đặt với hóa đơn trên 1 triệu vào 2 ngày 28/11 và 29/11.',
      p2: 'Xin cảm ơn.'
    },
    {
      title: 'MUA 1 TẶNG 1',
      thumbUrl: '../../assets/promotion/promotion-item-6.jpg',
      p1: 'Mua 1 tặng 1 áp dụng nước ép cam nguyên chất.',
      p2: 'Mỗi khách được đặt tối đa 5 phần. Không áp dụng đồng thời với chương trình khuyến mãi khác.',
      p3: 'Chương trình đến 29/09/2019. Rất vui được phục vụ.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
