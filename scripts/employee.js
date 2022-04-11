/**
 * This class represents Employee. Employee class is inherited from Person class.
 *
 * @param {string} role -  represents employee's role
 * @param {Store} store -  represents reference of Store class
 * @param {Array<Employee>} employees - employees array, that is encapsulated
 *
 * @method sayHi - alerts greeting message
 * @method setArrayList - setter for array of employees
 * @method getArrayList - getter for array of employees
 * @method fillArray - method for filling array of employees with some data
 * @method increment - method for increment employees
 * @method decrement - method for decrement employees
 * @method serveCustomer -method for buying  something, it checks if there is name of owner and understands what is going to be bought.
 * Also it checks if employee is cashier
 * @method display - method for display employees array in html document
 *
 * @returns {Object} the employee object
 *
 */

import Person from "./person.js";
import { employeesMock } from "./mocks.js";

export default class Employee extends Person {
  constructor(name = "", role, age = 0, email = "", phoneNumber = 0) {
    super(name, age, email, phoneNumber);
    this.role = role;
    var store;
    var employees;
  }

  sayHi() {
    return alert(`Hi! My name is ${this.name}. How can I help you?`);
  }

  setArrayList(employees) {
    if (!employees) return;

    this.employees = employees;
  }

  getArrayList() {
    return this.employees;
  }

  setStore(store) {
    this.store = store;
  }

  getStore() {
    return this.store;
  }

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

  increment(employee) {
    this.employees.push(employee);
  }

  decrement(name) {
    this.employees.splice(this.employees.indexOf(name), 1);
  }

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
