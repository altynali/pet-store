//@ts-check

import Product from "./product.js";
import { petsMock } from "./mocks.js";

/**
 * This class represents Pet. Pet class is inherited from Product class.
 *
 * pets array - encapsulated property
 *
 * @class Pet
 * @extends Product
 *
 */

export default class Pet extends Product {
  /**
   *
   * @param {string} category
   * @param {number} age
   * @param {number} price
   * @param {string} foodName
   * @param {number} foodPrice
   * @param {string} owner
   */
  constructor(
    category = "",
    age = 0,
    price = 0,
    foodName = "",
    foodPrice = 0,
    owner = ""
  ) {
    super(category, "", price);
    /**
     * @property {number} age - represents age of pet
     */
    this.age = age;
    /**
     * @property {Product} food - reference to Product class with food category for every pet, information about lovely food
     */
    this.food = new Product("food", foodName, foodPrice);
    /**
     * @property {string} owner - represents owner of pet, if it has one
     */
    this.owner = owner;
  }

  /**
   *  setArrayList - setter for array of pets
   * @returns {void}
   */
  setArrayList(pets) {
    if (!pets) return;

    this.pets = pets;
  }

  /**
   *  getArrayList - getter for array of pets
   * @returns {Array<Pet>}
   */
  getArrayList() {
    return this.pets;
  }

  /**
   *  fillArray - method for filling array of pets with some data
   * @returns {void}
   */
  fillArray() {
    var pets = [];

    petsMock.forEach((element) =>
      pets.push(
        new Pet(element.category, element.age, element.price, element.foodName)
      )
    );

    this.setArrayList(pets);
  }

  /**
   *  increment - method for increment pets
   * @returns {void}
   */
  increment(pet) {
    this.pets.push(pet);
  }

  /**
   *  decrement - method for decrement pets
   * @param {string} id
   * @returns {void}
   *
   */
  decrement(id) {
    const index = this.pets.findIndex((object) => {
      return object.id === id;
    });

    this.pets.splice(index, 1);
  }

  /**
   *  ownerFound - method for buying pet, it gives owner to pet and increment cash in store
   * @returns {number} returns value to employee
   */
  ownerFound(name, prevCash) {
    this.owner = name;
    return this.buyProduct(prevCash);
  }

  /**
   *  display - method for display pets array in html document
   * @returns html
   */
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
