/**
 * This class represents Store. It helps to manage everything in store: products, pets, employees and cash.
 *
 * @param {*} product - is instance of Product class
 * @param {*} pet - is instance of Pet class
 * @param {*} employee - is instance of Employee class
 * @param {*} cash - is instance of Cash class
 *
 * @param {*} displayProducts - Produnt class's method for display products array in html document
 * @param {*} displayPets - Pet class's method for display products array in html document
 * @param {*} displayEmployees - Employee class's method for display products array in html document
 * @param {*} displayCash - Cash class's method for display products array in html document
 *
 */

import Cash from "./cash.js";
import Employee from "./employee.js";
import Pet from "./pet.js";
import Product from "./product.js";

export default class Store {
  constructor() {
    this.product = new Product();
    this.pet = new Pet();
    this.employee = new Employee();
    this.cash = new Cash();
  }

  displayProducts() {
    return this.product.display();
  }

  displayPets() {
    return this.pet.display();
  }

  displayEmployees() {
    return this.employee.display();
  }

  displayCash() {
    return this.cash.display();
  }
}
