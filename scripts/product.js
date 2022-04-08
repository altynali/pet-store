/**
 * This class represents Product.
 *
 * @param {*} id - unique identifier, generates in class itself
 * @param {*} category - represents category of product
 * @param {*} name -  represents name of product
 * @param {*} price - represents price of product
 * @param {*} products - products array, that is encapsulated
 *
 * @param {*} setArrayList - setter for array of products
 * @param {*} getArrayList - getter for array of products
 * @param {*} fillArray - method for filling array of products with some data
 * @param {*} increment - method for increment products
 * @param {*} decrement - method for decrement products
 * @param {*} buyProduct - method for buying something and increment cash in store, returns value to employee
 * @param {*} display - method for display products array in html document
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
