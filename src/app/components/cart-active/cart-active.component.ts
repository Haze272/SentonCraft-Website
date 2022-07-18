import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart-service";

@Component({
  selector: 'app-cart-active',
  templateUrl: './cart-active.component.html',
  styleUrls: ['./cart-active.component.css']
})
export class CartActiveComponent {
  quantity: number = 0;
  price: number = 0;

  constructor(public cartService: CartService) {

    this.cartService.onAddedQuantity.subscribe((messageQuantity: number) => {
      this.quantity += messageQuantity;
    });

    this.cartService.onAddedPrice.subscribe((messagePrice: number) => {
      this.price += messagePrice;
    });

    this.quantity = cartService.onAddedQuantity.getValue();
    this.price = cartService.onAddedPrice.getValue();
  }

}
