/**
 *
 * @param {*} store
 *
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
