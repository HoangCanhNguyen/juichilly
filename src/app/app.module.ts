import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopBannerComponent } from './shared/top-banner/top-banner.component';
import { AdBannerComponent } from './shared/ad-banner/ad-banner.component';
import { WhyJuiComponent } from './shared/why-jui/why-jui.component';
import { ProductsSquareComponent } from './shared/products-square/products-square.component';
import { ProductsRectComponent } from './shared/products-rect/products-rect.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FeaturedProductsComponent } from './product/featured-products/featured-products.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { PartnerComponent } from './partner/partner.component';
import { CollectionComponent } from './collection/collection.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { StopPlasticComponent } from './stop-plastic/stop-plastic.component';
import { PromotionComponent } from './promotion/promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopBannerComponent,
    AdBannerComponent,
    WhyJuiComponent,
    ProductsSquareComponent,
    ProductsRectComponent,
    CartComponent,
    ContactComponent,
    PrivacyComponent,
    NotFoundComponent,
    AboutUsComponent,
    FaqsComponent,
    BlogListComponent,
    BlogDetailComponent,
    ProductListComponent,
    FeaturedProductsComponent,
    HomeComponent,
    LayoutComponent,
    PartnerComponent,
    CollectionComponent,
    MemberComponent,
    MemberDetailComponent,
    StopPlasticComponent,
    PromotionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
