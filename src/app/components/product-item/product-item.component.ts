import {Component, Input} from '@angular/core';
import {Product} from "../../services/product-service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export default class ProductItemComponent {
  private _quantity: number = 1;
  @Input() product: Product;

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
