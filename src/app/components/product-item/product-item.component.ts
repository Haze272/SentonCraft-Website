import {Component, Input} from '@angular/core';
import {ProductService} from "../../services/product-service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [ProductService]
})
export class ProductItemComponent {
  constructor(productService: ProductService) {

  }

}
