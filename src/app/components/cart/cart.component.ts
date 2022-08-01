import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart-service";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;
  totalPrice: number = 0;

  constructor(public cartService: CartService) {
    this.items = cartService.getItems();

    for (const [key, value] of this.items) {
      this.totalPrice += key.price * value;
    }

  }

  private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

}
