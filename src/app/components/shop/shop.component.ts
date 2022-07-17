import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product, ProductService} from "../../services/product-service";
import {CartNotificationModel, CartNotificationService} from "../../services/cart-notification-service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
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
