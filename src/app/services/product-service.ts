import {Injectable} from "@angular/core";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  icon_url: string;
}

export class ProductService {

  addProduct(id: number, title: string, price: number, description: string,icon_url?: string) {
    this.products.push({
      id: id,
      title: title,
      price: price,
      description: description,
      icon_url: icon_url ?? "./assets/img/minecraft-items/nemezida_crystal.png"
    })
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  products: Product[] = [
    {
      "id": 0,
      "title": "Энергетический меч",
      "price": 249,
      "description": "Antihype",
      "icon_url": "./assets/img/minecraft-items/energy_sword.png"
    },
    {
      "id": 1,
      "title": "Немедианский кристалл",
      "price": 79,
      "description": "ss",
      "icon_url": "./assets/img/minecraft-items/nemezida_crystal.png"
    },
    {
      "id": 2,
      "title": "Гамма-кристалл",
      "price": 149,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/gamma_crystal.png"
    },
    {
      "id": 3,
      "title": "Корифский камень",
      "price": 29,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/koryph_stone.png"
    },
    {
      "id": 4,
      "title": "E5-Q1",
      "price": 59,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/e5-q1.png"
    },
    {
      "id": 5,
      "title": "E9-X10",
      "price": 149,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/e9-x10.png"
    },
    {
      "id": 6,
      "title": "Азотная подкормка",
      "price": 19,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/nitrogen_fertilization.png"
    },
    {
      "id": 7,
      "title": "Процессор D-1",
      "price": 29,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/processor_d_1.png"
    },
    {
      "id": 8,
      "title": "Слиток першелиума",
      "price": 25,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/pershellium_ingot.png"
    },
    {
      "id": 9,
      "title": "Атмосферная пыль",
      "price": 9,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/atmospheric_dust.png"
    },
    {
      "id": 10,
      "title": "Кремень нестий",
      "price": 9,
      "description": "Lorem Huyorem",
      "icon_url": "./assets/img/minecraft-items/nestium_silicon.png"
    }
  ];
}
