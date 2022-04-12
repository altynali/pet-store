//@ts-check

/**
 * This class represents Product.
 *
 * products array - encapsulated property
 *
 * @class Product
 *
 */

import { productsMock } from "./mocks.js";

export default class Product {
  /**
   * @param {*} category
   * @param {*} name
   * @param {*} price
   */
  constructor(category = "food" || "toy", name = "", price) {
    /**
     * @property {number} id - unique identifier, generates in class itself
     */
    this.id = Date.now();
    /**
     * @property {string} category - represents category of product
     */
    this.category = category;
    /**
     * @property {string} name -  represents name of product
     */
    this.name = name;
    /**
     * @property {number} price - represents price of product
     */
    this.price = price;
  }

  /**
   * @property {Function} setArrayList - setter for array of  products
   * @param {Array<Product>} products
   * @returns {void}
   */
  setArrayList(products) {
    if (!products) return;

    this.products = products;
  }

  /**
   * @property {Function} getArrayList - getter for array of products
   * @returns {Array<Product>} products
   */
  getArrayList() {
    return this.products;
  }

  /**
   * @property {Function} fillArray - method for filling array of products with some data
   * @returns {void}
   */
  fillArray() {
    var products = [];

    productsMock.forEach((element) =>
      products.push(new Product(element.category, element.name, element.price))
    );

    this.setArrayList(products);
  }

  /**
   * @property {Function} increment - method for increment products
   * @returns {void}
   */
  increment(product) {
    this.products.push(product);
  }

  /**
   * @property {Function} decrement - method for decrement products
   * @returns {void}
   */
  decrement(name) {
    this.products.splice(this.products.indexOf(name), 1);
  }

  /**
   * @property {Function} buyProduct - method for buying something and increment cash in store, returns value to employee
   * @returns {number} cash
   */
  buyProduct(prevCash) {
    const cash = prevCash + this.price;
    return cash;
  }

  /**
   * @property {Function} display - method for display products array in html document
   * @returns html
   */
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
