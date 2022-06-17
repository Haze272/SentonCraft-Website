import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent } from './components/application/application.component';
import { HeaderComponent } from './components/header/header.component';
import ProductItemComponent from './components/product-item/product-item.component';
import {ProductService} from "./services/product-service";
import {RouterModule} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '',                    component: HomeComponent},
      {path: 'products/:prodTitle', component: ProductDetailComponent}

    ])
  ],
  declarations: [
    ApplicationComponent,
    HeaderComponent,
    ProductItemComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  providers: [
    ProductService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
