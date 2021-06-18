import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { ContactComponent } from './contact/contact.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberComponent } from './member/member.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PartnerComponent } from './partner/partner.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { FeaturedProductsComponent } from './product/featured-products/featured-products.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { PromotionComponent } from './promotion/promotion.component';
import { StopPlasticComponent } from './stop-plastic/stop-plastic.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'privacy', component: PrivacyComponent },
      { path: '404', component: NotFoundComponent },
      { path: 'about', component: AboutUsComponent },
      { path: 'faq', component: FaqsComponent },
      { path: 'blog', component: BlogListComponent },
      { path: 'blog/:title', component: BlogDetailComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'best-product', component: FeaturedProductsComponent },
      { path: 'member', component: MemberComponent },
      { path: 'member/:name', component: MemberDetailComponent },
      { path: 'become-partner', component: PartnerComponent },
      { path: 'stop-plastic', component: StopPlasticComponent },
      { path: 'promotion', component: PromotionComponent },
      { path: 'collection', component: CollectionComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
