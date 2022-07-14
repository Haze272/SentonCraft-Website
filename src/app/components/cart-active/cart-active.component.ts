import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-active',
  templateUrl: './cart-active.component.html',
  styleUrls: ['./cart-active.component.css']
})
export class CartActiveComponent {
  quantity: number = 0;
  price: number = 0;

  constructor(public cartService: CartService) {
    this.quantity = cartService.totalQuantity;
    this.price = cartService.totalPrice;
  }

}
