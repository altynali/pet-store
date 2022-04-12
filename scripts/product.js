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
   * @param {string} category
   * @param {string} name
   * @param {number} price
   */
  constructor(category = "food" || "toy", name = "", price) {
    /**
     * @property {string} id - unique identifier, generates in class itself
     */
    this.id = Math.random().toString(36).slice(2);
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
   *  setArrayList - setter for array of  products
   * @param {Array<Product>} products
   * @returns {void}
   */
  setArrayList(products) {
    if (!products) return;

    this.products = products;
  }

  /**
   *  getArrayList - getter for array of products
   * @returns {Array<Product>} products
   */
  getArrayList() {
    return this.products;
  }

  /**
   *  fillArray - method for filling array of products with some data
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
   *  increment - method for increment products
   * @returns {void}
   */
  increment(product) {
    this.products.push(product);
  }

  /**
   *  decrement - method for decrement products
   * @param {string} id
   * @returns {void}
   */
  decrement(id) {
    const index = this.products.findIndex((object) => {
      return object.id === id;
    });

    this.products.splice(index, 1);
  }

  /**
   *  buyProduct - method for buying something and increment cash in store, returns value to employee
   * @returns {number} cash
   */
  buyProduct(prevCash) {
    const cash = prevCash + this.price;
    return cash;
  }

  /**
   *  display - method for display products array in html document
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
