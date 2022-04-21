import { v4 as uuid } from "uuid";

const productsMock = [
  { id: uuid(), content: "First product", price: 20, type: "product" },
  { id: uuid(), content: "Second product", price: 20, type: "product" },
  { id: uuid(), content: "Third product", price: 20, type: "product" },
  { id: uuid(), content: "Fourth product", price: 20, type: "product" },
  { id: uuid(), content: "Fifth product", price: 20, type: "product" },
];

export const columnsMockSecond = {
  [uuid()]: {
    name: "Products List",
    type: "product",
    items: productsMock,
  },
  [uuid()]: {
    name: "1 Customer",
    email: "1email@gmail.com",
    type: "customer",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "2 Customer",
    email: "1email@gmail.com",
    type: "customer",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "3 Customer",
    email: "1email@gmail.com",
    type: "customer",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "4 Customer",
    email: "1email@gmail.com",
    type: "customer",
    items: [],
    total: 0,
  },
};
