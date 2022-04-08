/**
 * This class represents Pet. Pet class is inherited from Product class.
 * @param {*} age - represents age of pet
 * @param {*} price - represents price of pet
 * @param {*} name -  represents name of pet, it is empty, owner will change it later, if he wants to
 * @param {*} food - reference to Product class with food category for every pet
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
import { petsMock } from "./mocks.js";

export default class Pet extends Product {
  constructor(
    category = "",
    age = "",
    price = 0,
    foodName = "",
    foodPrice = 0,
    owner = ""
  ) {
    super(category, "", price);
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

    petsMock.forEach((element) =>
      pets.push(
        new Pet(element.category, element.age, element.price, element.foodName)
      )
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
           owner: ${element.owner || "This one has no owner"} <br> <br>`
      )
      .join("");
  }
}
