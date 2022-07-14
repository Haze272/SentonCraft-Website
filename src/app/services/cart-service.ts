import {Product} from "./product-service";

export class CartService {
  items = new Map<Product, number>();
  totalQuantity: number = 0;

  addToCart(product: Product, quantity: number) {
    if (this.items.has(product)) {
      let currentQuantity = 0;
      // @ts-ignore
      currentQuantity += quantity + this.items.get(product);
      this.items.set(product, currentQuantity)
    } else {
      this.items.set(product, quantity);
    }
    this.totalQuantity += quantity;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.clear();
    return this.items;
  }

}
