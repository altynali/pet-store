//@ts-check

/**
 * Class to create a cash object.
 * @class Cash
 */
export default class Cash {
  /**
   * @param {number} cash
   */
  constructor(cash = 0) {
    /**
     * @property {number} cash - represents cash in whole store
     */
    this.cash = cash;
  }

  /**
   *  setCash - cash setter
   * @returns {void}
   */
  setCash(cash) {
    this.cash = cash;
  }

  /**
   *  getCash - cash getter
   * @returns {number}
   */
  getCash() {
    return this.cash;
  }

  /**
   *  display - method for cash amount pets array in html document
   * @returns html
   */
  display() {
    return `capital: ${this.cash} <br> <br>`;
  }
}
