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

//filling data +
store.pet.fillArray();
store.product.fillArray();
store.employee.fillArray(store);

//------------------------------------------
//------------------------------------------
//------------------------------------------

//increment and decrement employee
store.employee.increment(new Employee("LLLLLL", "security", 50, "d", 50));

// store.employee.decrement("Jane");

//increment and decrement pet
store.pet.increment(new Pet("category", 10, 1000, "every food"));

store.pet.decrement(store.pet.getArrayList()[1].id);
//------------------------------------------
//------------------------------------------
//------------------------------------------

store.employee
  .getArrayList()[1]
  .serveCustomer(store.pet.getArrayList()[0], "Will"); // - buying pet means pet has owner

store.employee
  .getArrayList()[2]
  .serveCustomer(store.pet.getArrayList()[0], "Will"); // - sorry, you're not cashier

cashierEmployee.serveCustomer(store.pet.getArrayList()[2], "Cal");
cashierEmployee.serveCustomer(store.product.getArrayList()[2]);

cashierEmployee.serveCustomer(store.product.getArrayList()[2]);

store;

//employees, that have not cashier role can't have access to cash
store.employee
  .getArrayList()[1]
  .serveCustomer(store.pet.getArrayList()[0], "Will");

//set result data insight div
htmlDivPets.innerHTML = store.displayPets();
htmlDivProducts.innerHTML = store.displayProducts();
htmlDivEmployees.innerHTML = store.displayEmployees();
htmlDivCash.innerHTML = store.displayCash();
