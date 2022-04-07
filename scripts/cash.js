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
