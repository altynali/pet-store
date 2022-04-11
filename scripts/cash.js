/**
 * This class represents Cash.
 *
 * @param {number} cash -  represents cash in whole store
 *
 * @method setCash - cash setter
 * @method getCash - cash getter
 * @method display - method for cash amount pets array in html document
 *
 * @returns {Object} the cash object
 */

export default class Cash {
  constructor(cash = 0) {
    this.cash = cash;
  }

  setCash(cash) {
    this.cash = cash;
  }

  getCash() {
    return this.cash;
  }

  display() {
    return `capital: ${this.cash} <br> <br>`;
  }
}
