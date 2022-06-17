export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public description: string,
    public icon_url: string
  ) {
  }
}

export class ProductService {
  getProduct(): Product {
    return new Product(0, "Карифская пыльца", 29, "tururum", "./assets/img/minecraft-items/gamma_crystal.png");
  }

  getProducts(): Array<Product> {
    return this.products.map(p => new Product(p.id, p.title, p.price, p.description, p.image_url));
  }

  products = [
    {
      "id": 0,
      "title": "Энергетический меч",
      "price": 249,
      "description": "Antihype",
      "image_url": "./assets/img/minecraft-items/energy_sword.png"
    },
    {
      "id": 1,
      "title": "Немедианский кристалл",
      "price": 79,
      "description": "ss",
      "image_url": "./assets/img/minecraft-items/nemezida_crystal.png"
    },
    {
      "id": 2,
      "title": "Гамма-кристалл",
      "price": 149,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/gamma_crystal.png"
    },
    {
      "id": 3,
      "title": "Корифский камень",
      "price": 29,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/koryph_stone.png"
    },
    {
      "id": 4,
      "title": "E5-Q1",
      "price": 59,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/e5-q1.png"
    },
    {
      "id": 5,
      "title": "E9-X10",
      "price": 149,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/e9-x10.png"
    },
    {
      "id": 6,
      "title": "Азотная подкормка",
      "price": 19,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/nitrogen_fertilization.png"
    },
    {
      "id": 7,
      "title": "Процессор D-1",
      "price": 29,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/processor_d_1.png"
    }
  ];
}
