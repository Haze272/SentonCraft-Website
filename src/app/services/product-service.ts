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
}
