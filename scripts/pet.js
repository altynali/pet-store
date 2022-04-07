import Product from "./product.js";

export default class Pet extends Product {
  constructor(
    kind = "",
    age = "",
    price = 0,
    foodName = "",
    foodPrice = 0,
    owner = ""
  ) {
    super(kind, "", price);
    this.age = age;
    this.food = new Product("food", foodName, foodPrice);
    this.owner = owner;
  }

  setArrayList(pets) {
    if (!pets) return;

    this.pets = pets;
  }

  getArrayList() {
    return this.pets;
  }

  fillArray() {
    [4, 5, 6, 7, 8, 9].forEach((element) =>
      this.pets.push(
        new Pet("dog", element, element + 100, "Butterscotch", element + 10)
      )
    );

    [1, 1, 2, 3].forEach((element) =>
      this.pets.push(
        new Pet("cat", element, element + 100, "Whiskas", element + 10)
      )
    );
  }

  increment(pet) {
    this.pets.push(pet);
  }

  decrement() {
    this.pets.splice(this, 1);
  }

  ownerFound(name, prevCash) {
    this.owner = name;
    return this.buyProduct(prevCash);
  }

  display() {
    return this.pets
      .map(
        (element) =>
          `kind: ${element.category} <br>
           age: ${element.age} <br>
           price: ${element.price} <br> 
           lovely food: ${element.food.name} <br>
           food: ${element.food.price} <br> 
           owner: ${element.owner || "This one has no owner"} <br> <br>`
      )
      .join("");
  }
}
