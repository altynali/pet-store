/**
 * This class represents Person.
 *
 * @param {*} name -  represents name
 * @param {*} age -  represents age
 * @param {*} email -  represents age
 * @param {*} phoneNumber - represents phoneNumber
 *
 * @param {*} sayHi - alerts greeting message
 *
 */

export default class Person {
  constructor(name = "", age = 0, email = "", phoneNumber = 0) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  sayHi() {
    return alert(`Hi! My name is ${this.name}`);
  }
}
