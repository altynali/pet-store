/**
 * This class represents Store. It helps to manage everything in store: products, pets, employees and cash.
 *
 * @class Store
 *
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
    /**
     * @property {Product} product - reference of Product class
     */
    this.product = new Product();

    /**
     * @property {Pet} pet - reference of Pet class
     */
    this.pet = new Pet();

    /**
     * @property {Employee} employee - reference of Employee class
     */
    this.employee = new Employee();

    /**
     * @property {Cash} cash - reference of Cash class
     */
    this.cash = new Cash();
  }

  /**
   *  displayProducts - Product class's method for display products array in html document
   * @returns display
   */
  displayProducts() {
    return this.product.display();
  }

  /**
   *   displayPets - Pet class's method for display products array in html document
   *
   * @returns display
   */
  displayPets() {
    return this.pet.display();
  }

  /**
   *   displayEmployees - Employee class's method for display products array in html document
   *
   * @returns display
   */
  displayEmployees() {
    return this.employee.display();
  }

  /**
   *    displayCash - Cash class's method for display products array in html document
   *
   * @returns display
   */
  displayCash() {
    return this.cash.display();
  }
}
