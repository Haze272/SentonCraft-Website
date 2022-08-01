import {Product, ProductService} from "./product-service";
import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class CartService {
  items = new Map<Product, number>();

  onAddedQuantity: BehaviorSubject<number> = new BehaviorSubject(0);
  onAddedPrice: BehaviorSubject<number> = new BehaviorSubject(0);


  constructor(productService :ProductService) {
    for (let product of productService.getProducts()) {
      this.addToCart(product, getRandomInt(1, 20));
    }
  }

  addToCart(product: Product, quantity: number) {
    if (this.items.has(product)) {
      let currentQuantity = 0;
      // @ts-ignore
      currentQuantity += quantity + this.items.get(product);
      this.items.set(product, currentQuantity)
    } else {
      this.items.set(product, quantity);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.clear();
    return this.items;
  }

  addMockProducts() {

  }

}

function getRandomInt(min: number, max :number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
