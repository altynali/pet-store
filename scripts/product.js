/**
 * This class represents Product.
 *
 * @param {number} id - unique identifier, generates in class itself
 * @param {string} category - represents category of product
 * @param {string} name -  represents name of product
 * @param {number} price - represents price of product
 * @param {Array<Product>} products - products array, that is encapsulated
 *
 * @method setArrayList - setter for array of products
 * @method getArrayList - getter for array of products
 * @method fillArray - method for filling array of products with some data
 * @method increment - method for increment products
 * @method decrement - method for decrement products
 * @method buyProduct - method for buying something and increment cash in store, returns value to employee
 * @method display - method for display products array in html document
 *
 * @returns {Product} the product object
 *
 */

import { productsMock } from "./mocks.js";

export default class Product {
  constructor(category = "food" || "toy", name = "", price) {
    this.id = Date.now();
    this.category = category;
    this.name = name;
    this.price = price;
    var products;
  }

  setArrayList(products) {
    if (!products) return;

    this.products = products;
  }

  getArrayList() {
    return this.products;
  }

  fillArray() {
    var products = [];

    productsMock.forEach((element) =>
      products.push(new Product(element.category, element.name, element.price))
    );

    this.setArrayList(products);
  }

  increment(product) {
    this.products.push(product);
  }

  decrement(name) {
    this.products.splice(this.products.indexOf(name), 1);
  }

  buyProduct(prevCash) {
    const cash = prevCash + this.price;
    return cash;
  }

  display() {
    return this.products
      .map(
        (element) =>
          `category: ${element.category} <br>
           name: ${element.name} <br> 
           price: ${element.price} <br> <br>`
      )
      .join("");
  }
}
