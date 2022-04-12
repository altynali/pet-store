/**
 * This class represents Person.
 * @class Person
 */

export default class Person {
  /**
   * @param {string} name
   * @param {number} age
   * @param {string} email
   * @param {number} phoneNumber
   */
  constructor(name = "", age = 0, email = "", phoneNumber = 0) {
    /**
     * @property {string} name - represents name
     */
    this.name = name;
    /**
     * @property {number} age - represents age
     */
    this.age = age;
    /**
     * @property {string} email -  represents age
     */
    this.email = email;
    /**
     * @property {number} phoneNumber - represents phoneNumber
     */
    this.phoneNumber = phoneNumber;
  }

  /**
   *   sayHi - alerts greeting message
   * @returns alert
   */

  sayHi() {
    return alert(`Hi! My name is ${this.name}`);
  }
}
