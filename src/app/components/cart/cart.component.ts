import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart-service";
import {KeyValue} from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(public cartService: CartService) {
    this.items = cartService.getItems();
  }

  private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return -1;
  }

  ngOnInit(): void {
  }

}
