/**
 * This class represents Pet. Pet class is inherited from Product class.
 *
 * @param {number} age - represents age of pet
 * @param {Product} food - reference to Product class with food category for every pet, information about lovely food
 * @param {string} owner - represents owner of pet, if it has one
 * @param {Array<Pet>} pets - pets array, that is encapsulated
 *
 * @method setArrayList - setter for array of pets
 * @method getArrayList - getter for array of pets
 * @method fillArray - method for filling array of pets with some data
 * @method increment - method for increment pets
 * @method decrement - method for decrement pets
 * @method ownerFound -method for buying pet, it gives owner to pet and increment cash in store, returns value to employee
 * @method display - method for display pets array in html document
 *
 * @returns {Pet} the pet object
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
