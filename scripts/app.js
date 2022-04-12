import Store from "./store.js";
import Employee from "./employee.js";
import Pet from "./pet.js";

//inicializing store
const store = new Store();

//adding cashier manually
const cashierEmployee = new Employee(
  "Petr",
  "cashier",
  30,
  5000548,
  "rwsger@mail.ru"
);

cashierEmployee.setStore(store);

//get html blocks
const htmlDivPets = document.getElementById("pets");
const htmlDivProducts = document.getElementById("products");
const htmlDivEmployees = document.getElementById("employees");
const htmlDivCash = document.getElementById("cash");

document
  .getElementById("fillDefaultPets")
  .addEventListener("click", function () {
    store.pet.fillArray();
    htmlDivPets.innerHTML = store.displayPets();
  });

document
  .getElementById("fillDefaultProducts")
  .addEventListener("click", function () {
    store.product.fillArray();
    htmlDivProducts.innerHTML = store.displayProducts();
  });

document
  .getElementById("fillDefaultEmployees")
  .addEventListener("click", function () {
    store.employee.fillArray(store);
    htmlDivEmployees.innerHTML = store.displayEmployees(store.employee);
  });

document.getElementById("displayCash").addEventListener("click", function () {
  store.employee.fillArray(store);
  htmlDivCash.innerHTML = store.displayCash();
});
