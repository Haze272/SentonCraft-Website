import {Product} from "./product-service";

export class CartService {
  items = new Map<Product, number>();

  addToCart(product: Product, quantity: number) {
    this.items.set(product, quantity);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.clear();
    return this.items;
  }

}
