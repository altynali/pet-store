/**
 *
 * @param {*} store
 *
 *
 */

import Person from "./person.js";

export default class Employee extends Person {
  constructor(name = "", age = 0, email = "", mobile = 0, store) {
    super(name, age, email, mobile);
    this.store = store;
    this.employees = [];
  }

  sayHi() {
    return alert(`Hi! My name is ${this.name}. How can I help you?`);
  }

  setArrayList(employees) {
    if (!products) return;

    this.employees = employees;
  }

  getArrayList() {
    return this.employees;
  }

  fillArray(employees) {
    if (employees) {
      this.employees = employees;
    } else {
      [1, 6, 9, 8, 4, 5, 6, 7, 8].forEach((element) =>
        this.employees.push(
          new Employee(
            element + "Employee",
            element + 20,
            element + "employee@gmail.com",
            720500100 + element
          )
        )
      );
    }
  }

  increment(employee) {
    this.employees.push(employee);
    console.log(this.employees);
  }

  decrement(name) {
    this.employees.splice(this.employees.indexOf(name), 1);
  }

  serveCustomer(product, newOwnerName) {
    const currentCash = this.store.cash.getCash();

    if (newOwnerName) {
      const addCash = product.ownerFound(newOwnerName, currentCash);
      this.store.cash.setCash(addCash);
    } else {
      const addCash = product.buyProduct(currentCash);
      this.store.cash.setCash(addCash);
    }
  }

  display() {
    return this.employees
      .map(
        (element) =>
          ` name: ${element.name} <br>
            age: ${element.age} <br> 
            email: ${element.email} <br>
            mobile: ${element.mobile} <br> <br>`
      )
      .join("");
  }
}
