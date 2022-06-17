export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number
  ) {
  }
}

export class ProductService {
  getProduct(): Product {
    return new Product(0, "Карифская пыльца", 29);
  }

  getProducts(): Array<Product> {
    return this.products.map(p => new Product(p.id, p.title, p.price));
  }

  products = [
    {
      "id": 0,
      "title": "First Product",
      "price": 24.99
    },
    {
      "id": 1,
      "title": "Second Product",
      "price": 64.99
    }
  ];
}
