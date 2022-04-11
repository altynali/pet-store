/**
 * This class represents Store. It helps to manage everything in store: products, pets, employees and cash.
 *
 * @param {Product} product - reference of Product class
 * @param {Pet} pet - reference of Pet class
 * @param {Employee} employee - reference of Employee class
 * @param {Cash} cash - reference of Cash class
 *
 * @method displayProducts - Product class's method for display products array in html document
 * @method displayPets - Pet class's method for display products array in html document
 * @method displayEmployees - Employee class's method for display products array in html document
 * @method displayCash - Cash class's method for display products array in html document
 *
 * @returns {Store} the store object
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
