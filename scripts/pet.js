/**
 * This class represents Pet. Pet class is inherited from Product class.
 * =
 * @param {*} kind - represents category of pet
 * @param {*} name -  represents name of pet, it is empty, owner will change it later, if he wants to
 * @param {*} age - represents age of pet
 * @param {*} foodName - helps to initialize product with food category for every pet
 * @param {*} foodPrice - helps to initialize product with food category for every pet
 * @param {*} owner - represents owner of pet, if it has one
 * @param {*} pets - pets array, that is encapsulated
 *
 * @param {*} setArrayList - setter for array of pets
 * @param {*} getArrayList - getter for array of pets
 * @param {*} fillArray - method for filling array of pets with some data
 * @param {*} increment - method for increment pets
 * @param {*} decrement - method for decrement pets
 * @param {*} ownerFound -method for buying pet, it gives owner to pet and increment cash in store, returns value to employee
 * @param {*} display - method for display pets array in html document
 *
 */

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
    var pets;
  }

  setArrayList(pets) {
    if (!pets) return;

    this.pets = pets;
  }

  getArrayList() {
    return this.pets;
  }

  fillArray() {
    var pets = [];

    [4, 5, 6, 7, 8, 9].forEach((element) =>
      pets.push(
        new Pet("dog", element, element + 100, "Butterscotch", element + 10)
      )
    );

    [1, 1, 2, 3].forEach((element) =>
      pets.push(new Pet("cat", element, element + 100, "Whiskas", element + 10))
    );

    this.setArrayList(pets);
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
