import { v4 as uuid } from "uuid";

export const petsMock = [
  { id: uuid(), content: "First pet", price: 200, type: "pet" },
  { id: uuid(), content: "Second pet", price: 200, type: "pet" },
  { id: uuid(), content: "Third pet", price: 200, type: "pet" },
  { id: uuid(), content: "Fourth pet", price: 200, type: "pet" },
  { id: uuid(), content: "Fifth pet", price: 200, type: "pet" },
];
export const productsMock = [
  { id: uuid(), content: "First product", price: 20, type: "product" },
  { id: uuid(), content: "Second product", price: 20, type: "product" },
  { id: uuid(), content: "Third product", price: 20, type: "product" },
  { id: uuid(), content: "Fourth product", price: 20, type: "product" },
  { id: uuid(), content: "Fifth product", price: 20, type: "product" },
];

export const columnsMock = {
  [uuid()]: {
    name: "PetsList",
    type: "pet",
    items: petsMock,
  },
  [uuid()]: {
    name: "ProductsList",
    type: "product",
    items: productsMock,
  },
  [uuid()]: {
    name: "1 Person",
    type: "person",
    items: [],
  },
  [uuid()]: {
    name: "2 Person",
    type: "person",
    items: [],
  },
  [uuid()]: {
    name: "3 Person",
    type: "person",
    items: [],
  },
};
