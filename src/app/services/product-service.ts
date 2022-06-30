export class Product {
  private _id: number;
  private _title: string;
  private _price: number;
  private _description: string;
  private _icon_url: string;

  constructor(id: number, title: string, price: number, description: string, icon_url?: string) {
    this._id = id;
    this._title = title;
    this._price = price;
    this._description = description;
    this._icon_url = icon_url ?? "./assets/img/minecraft-items/nemezida_crystal.png";
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get icon_url(): string {
    return this._icon_url;
  }

  set icon_url(value: string) {
    this._icon_url = value;
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
    },
    {
      "id": 8,
      "title": "Слиток першелиума",
      "price": 25,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/pershellium_ingot.png"
    },
    {
      "id": 9,
      "title": "Атмосферная пыль",
      "price": 9,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/atmospheric_dust.png"
    },
    {
      "id": 10,
      "title": "Кремень нестий",
      "price": 9,
      "description": "Lorem Huyorem",
      "image_url": "./assets/img/minecraft-items/nestium_silicon.png"
    },
    {
      "id": 11,
      "title": "Скрижаль",
      "price": 9,
      "description": "Lorem Huyorem"
    }
  ];
}
