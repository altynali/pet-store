/**
 * This class represents Person.
 *
 * @param {string} name - represents name
 * @param {number} age - represents age
 * @param {string} email -  represents age
 * @param {number} phoneNumber - represents phoneNumber
 *
 * @method sayHi - alerts greeting message
 *
 * @returns {Object} the person object
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
