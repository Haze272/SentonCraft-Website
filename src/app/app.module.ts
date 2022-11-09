import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApplicationComponent } from './application.component';
import ProductItemComponent from './components/pages/shop/product-item/product-item.component';
import {ProductService} from "./services/product-service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { ShopComponent } from './components/pages/shop/shop.component';
import { HeaderExperementialComponent } from './components/shared/header-experemential/header-experemential.component';
import { SidenavListComponent } from './components/shared/sidenav-list/sidenav-list.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./modules/material-module";
import { CartService } from "./services/cart-service";
import { CartComponent } from './components/pages/cart/cart.component';
import { CartNotificationComponent } from './components/pages/shop/cart-notification/cart-notification.component';
import { CartNotificationService} from "./services/cart-notification-service";
import { CartActiveComponent } from './components/pages/shop/cart-active/cart-active.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PlayComponent } from './components/pages/play/play.component';
import { ServersComponent } from './components/pages/servers/servers.component';
import { RulesComponent } from './components/pages/rules/rules.component';
import { LoginComponent } from './components/shared/login/login.component';
import { MatDialogModule} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { OverlayModule } from "@angular/cdk/overlay";
import { AppRoutingModule } from "./modules/app-routing.module";


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    OverlayModule
  ],
  declarations: [
    ApplicationComponent,
    ProductItemComponent,
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
    LoginComponent
  ],
  providers: [
    ProductService,
    CartService,
    CartNotificationService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ApplicationComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
