//@ts-check

import Person from "./person.js";
import Store from "./store.js";
import { employeesMock } from "./mocks.js";

/**
 * This class represents Employee. Employee class is inherited from Person class.
 * @class Employee
 * @extends Person
 */

export default class Employee extends Person {
  /**+
   * @param {string} name
   * @param {string} role
   * @param {number} age
   * @param {string} email
   * @param {number} phoneNumber
   */
  constructor(name = "", role, age = 0, email = "", phoneNumber = 0) {
    super(name, age, email, phoneNumber);
    /**
     * @property {string} role -  represents employee's role
     */
    this.role = role;
    /**
     * represents reference of Store class
     */
    var store;
    /**
     * employees array, that is encapsulated
     */
    var employees;
  }

  /**
   * @property {Function} sayHi - alerts greeting message
   */
  sayHi() {
    return alert(`Hi! My name is ${this.name}. How can I help you?`);
  }
  /**
   * @property {Function} setArrayList - setter for array of employees
   * @param {*} employees
   * @returns {void}
   */
  setArrayList(employees) {
    if (!employees) return;

    this.employees = employees;
  }

  /**
   * @property {Function} getArrayList - getter for array of employees
   * @returns {Array<Employee>}
   */
  getArrayList() {
    return this.employees;
  }

  /**
   * @property {Function} setStore - setter for store reference
   * @param {*} store
   * @returns {void}
   */
  setStore(store) {
    this.store = store;
  }

  /**
   * @property {Function} setStore - getter for store reference
   * @returns {Store}
   */
  getStore() {
    return this.store;
  }

  /**
   * @property {Function} fillArray - method for filling array of employees with some data
   * @param {*} store
   * @returns {void}
   */
  fillArray(store) {
    let employees = [];

    employeesMock.forEach((element) =>
      employees.push(
        new Employee(
          element.name,
          element.role,
          element.age,
          element.email,
          element.phoneNumber
        )
      )
    );

    employees.forEach((element) => {
      if (element.role === "cashier") {
        element.setStore(store);
      }
    });

    this.setArrayList(employees);
  }

  /**
   * @property {Function} increment - method for increment employees
   * @param {*} employee
   * @returns {void}
   */
  increment(employee) {
    this.employees.push(employee);
  }

  /**
   * @property {Function} decrement - method for decrement employees
   * @param {*} name
   * @returns {void}
   */
  decrement(name) {
    this.employees.splice(this.employees.indexOf(name), 1);
  }

  /**
   * @property {Function} serveCustomer -method for buying  something, it checks if there is name of owner and understands what is going to be bought.
   * Also it checks if employee is cashier
   * @param {*} product
   * @param {*} newOwnerName
   * @returns {void}
   */
  serveCustomer(product, newOwnerName) {
    if (this.role !== "cashier") {
      return alert(`Sorry, you're not cashier`);
    }
    const currentCash = this.getStore().cash.getCash();

    if (newOwnerName) {
      const addCash = product.ownerFound(newOwnerName, currentCash);
      this.getStore().cash.setCash(addCash);
    } else {
      const addCash = product.buyProduct(currentCash);
      this.getStore().cash.setCash(addCash);
    }
  }

  /**
   * @property {Function} display - method for display employees array in html document
   * @returns html
   */
  display() {
    return this.employees
      .map(
        (element) =>
          ` name: ${element.name} <br>
            age: ${element.age} <br> 
            email: ${element.email} <br>
            phoneNumber: ${element.phoneNumber} <br> <br>`
      )
      .join("");
  }
}
