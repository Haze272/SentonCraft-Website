import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../../services/product-service";
import {CartNotificationModel, CartNotificationService} from "../../services/cart-notification-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartNotificationService: CartNotificationService
  ) {
    this.products = this.productService.getProducts();
  }

  public showToast(header: string, description: string) {
    this.cartNotificationService.showToast(new CartNotificationModel(header,description));
  }
}
