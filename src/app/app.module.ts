import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApplicationComponent } from './components/application/application.component';
import ProductItemComponent from './components/product-item/product-item.component';
import {ProductService} from "./services/product-service";
import {RouterModule} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ShopComponent } from './components/show/shop.component';
import { HeaderExperementialComponent } from './components/navigation/header-experemential/header-experemential.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material-module";
import {CartService} from "./services/cart-service";
import { CartComponent } from './components/cart/cart.component';
import { CartNotificationComponent } from './components/cart-notification/cart-notification.component';
import {CartNotificationService} from "./services/cart-notification-service";
import { CartActiveComponent } from './components/cart-active/cart-active.component';
import { HomeComponent } from './components/home/home.component';
import { PlayComponent } from './components/play/play.component';
import { ServersComponent } from './components/servers/servers.component';
import { RulesComponent } from './components/rules/rules.component';
import {FAQComponent} from "./components/faq/faq.component";


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '',                    component: HomeComponent},
      {path: 'play',                component: PlayComponent},
      {path: 'rules',               component: RulesComponent},
      {path: 'server-list',         component: ServersComponent},
      {path: 'shop',                component: ShopComponent},
      {path: 'products/:prodTitle', component: ProductDetailComponent},
      {path: 'cart',                component: CartComponent},
      {path: 'faq',                 component: FAQComponent}
    ]),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ApplicationComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ShopComponent,
    HeaderExperementialComponent,
    SidenavListComponent,
    CartComponent,
    CartNotificationComponent,
    CartActiveComponent,
    HomeComponent,
    PlayComponent,
    ServersComponent,
    RulesComponent,
    FAQComponent
  ],
  providers: [
    ProductService,
    CartService,
    CartNotificationService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
