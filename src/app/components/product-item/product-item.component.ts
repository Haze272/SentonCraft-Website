import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../services/product-service";
import {CartService} from "../../services/cart-service";
import {CartNotificationModel, CartNotificationService} from "../../services/cart-notification-service";
import {SharedService} from "../../services/shared-service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export default class ProductItemComponent {
  private _quantity: number = 1;
  @Input() product: Product;

  constructor(
    public cartService: CartService,
    public cartNotificationService:CartNotificationService
  ) {
  }

  addToCart(product: Product) {
    this.cartNotificationService.showToast(new CartNotificationModel("header", this._quantity + ' ' + product.title.toLowerCase() + ' был успешно добавлен в корзину!'));
    this.cartService.addToCart(product, this._quantity);
    this._quantity = 1;
    this.cartService.messageSource.next(this._quantity);
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  increase_quantity() {
    this._quantity++;
  }

  decrease_quantity() {
    if (this._quantity > 1) {
      this._quantity--;
    }
  }

}
