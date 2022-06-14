import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent } from './components/application/application.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    HeaderComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
