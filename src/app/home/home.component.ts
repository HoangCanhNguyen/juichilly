import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Autoplay
} from 'swiper/core';
SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slideShowImages = [
    '../../assets/home/slideshow-1.png',
    '../../assets/home/slide-show-2.png',
    '../../assets/home/slide-show-3.png',
    '../../assets/home/slide-show-4.png',
    '../../assets/home/slide-show-5.png',
  ];

  testimonials = [
    {
      commentor: 'Trần Lan Hương',
      briefDesc: 'Biên tập viên truyền hình',
      content: 'Tôi đã từng đọc đâu đó rằng "Tình thương có thể chữa lành được mọi điều". Biết đến Juice từ 2014 đến ay, Juice vẫn là một bài thuốc giúp tôi cân bằng trong cuộc sống. Mỗi khi công việc, gia đình, cuộc sống và tình cảm gặp stree, tôi vẫn tìm niềm vui từ Juice. Juice là "Tình thương" giúp cuộc sống của tôi mỗi ngày rực rỡ sắc màu hơn. Với tôi, kể từ ngày có thêm "Tình thương", cuộc sống của tôi dường như rõ ràng hơn, green hơn, red hơn, yellow hơn và đủ vị hơn. Chính vì vậy, tôi muốn đem "Tình thương" ấy dành cho gia đình mình, dành cho người tôi thương và cho cả bản thân tôi nữa'
    },
    {
      commentor: 'Nguyễn Bích Hiền',
      briefDesc: 'Sinh sống tại Hà Nội',
      content: 'Những ngày này 3 năm trước, tôi đã từng hoang mang vô cùng vì sau khi sinh bé, bác sĩ báo tôi chuyển viện K. Kết quả phân tích bất ngờ từ cái hạch nhỏ ở cổ đã chuyển thành ung thư hạch bạch huyết. Ấn tượng đầu tiên khi tôi hóa trị bên Nhật là trong chế độ của họ, ngoài uống tảo xoắn và lợi khuẩn thì họ cho tôi dùng nước ép táo, cà rốt, củ dền. Mỗi ngày vài cốc, cứ như vậy trong một năm để bù lượng hồng cầu đã mất trong đợt điều trị. Và may mắn thay, hết đợt điều trị thì các chỉ số của tôi lên rất nhiều. Từ đó đến nay, tôi thay đổi thói quen ăn uống, không ăn thịt đỏ và vẫn duy trì uống nước ép hàng ngày cho đến tận bây giờ.'
    },
    {
      commentor: 'Trần Hương Thảo',
      briefDesc: 'Cán bộ nhà nước',
      content: 'Đã từng có thời gian dài xung quanh mình luôn là thuốc bổ, vitamin, thực phẩm chức năng. Lướt facebook, cứ ai khoe uống gì cho đẹp da, trẻ khỏe là mua. Và chính bản thân mình cũng không hiểu tại sao một đứa lười uống thuốc lại mua lắm thuốc như vậy. Xinh và trẻ chưa thấy đâu chỉ thấy tốn tiền, chưa nói đến người lúc nào cũng mẩn ngứa. Kể từ khi uống nước ép, mình đã thay đổi rất nhiều trong thói quen ăn uống, trong sự lựa chọn nguyên liệu thực phẩm. Việc sử dụng đồ tươi sống cho mình cảm nhận sự tươi ngon của rau củ quả, cảm nhận mùi vị tự nhiên vốn có của chúng. Thói quen uống nước ép làm cho mình không còn muốn ăn những đồ chiên rán, nhiều mỡ, những loại thức ăn đồ uống được tẩm ướp hương liệu công nghiệp'
    },
  ]

  customerTesti = [
    {
      avatar: '../../assets/home/testi-avatar-1.png',
      name: 'Callista',
      professional: 'Graphic Designer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },

    {
      avatar: '../../assets/home/hinh-anh-co-gai-toc-ngan-de-thuong.png',
      name: 'Callista',
      professional: 'Graphic Designer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]

  breakpoints = {
    0: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
