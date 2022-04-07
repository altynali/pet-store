export default class Product {
  constructor(category = "food" || "toy", name = "", price) {
    this.id = Date.now();
    this.category = category;
    this.name = name;
    this.price = price;
    this.products = [];
  }

  setArrayList(products) {
    if (!products) return;

    this.products = products;
  }

  getArrayList() {
    return this.products;
  }

  fillArray() {
    [1, 6].forEach((element) =>
      this.products.push(new Product("food", "Whiskas", element + 10))
    );

    [9, 8, 4].forEach((element) =>
      this.products.push(new Product("food", "Pidegree", element + 10))
    );

    [5, 6, 7, 8, 9].forEach((element) =>
      this.products.push(new Product("toy", "Tuffies", element + 10))
    );
  }

  increment(product) {
    this.products.push(product);
  }

  decrement(name) {
    this.products.splice(this.products.indexOf(name), 1);
  }

  buyProduct(prevCash) {
    if (!this.products) return;
    const cash = prevCash + this.price;
    return cash;
  }

  display() {
    return this.products
      .map(
        (element) =>
          `category: ${element.category} <br>
           name: ${element.name} <br> 
           price: ${element.price} <br> <br>`
      )
      .join("");
  }
}
