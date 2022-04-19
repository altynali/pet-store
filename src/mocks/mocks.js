import { v4 as uuid } from "uuid";

export const productsMock = [
  { id: uuid(), content: "First product", price: 20, type: "product" },
  { id: uuid(), content: "Second product", price: 20, type: "product" },
  { id: uuid(), content: "Third product", price: 20, type: "product" },
  { id: uuid(), content: "Fourth product", price: 20, type: "product" },
  { id: uuid(), content: "Fifth product", price: 20, type: "product" },
];

export const elseProducts = [
  { id: uuid(), content: "First product", price: 20, type: "product" },
  { id: uuid(), content: "First product", price: 20, type: "product" },
  { id: uuid(), content: "First product", price: 20, type: "product" },
];

export const petsMock = [
  {
    id: uuid(),
    content: "First pet",
    price: 200,
    type: "pet",
    products: [],
  },
  { id: uuid(), content: "Second pet", price: 200, type: "pet", products: [] },
  { id: uuid(), content: "Third pet", price: 200, type: "pet", products: [] },
  { id: uuid(), content: "Fourth pet", price: 200, type: "pet", products: [] },
  { id: uuid(), content: "Fifth pet", price: 200, type: "pet", products: [] },
];

export const columnsMockFirst = {
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
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "2 Person",
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "3 Person",
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
};

export const columnsMockSecond = {
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
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "2 Person",
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "3 Person",
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
};

export const columnsMockThird = {
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
    name: "Person",
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "Person",
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
  [uuid()]: {
    name: "Person",
    email: "1email@gmail.com",
    type: "person",
    items: [],
    total: 0,
  },
};
