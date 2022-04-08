import Store from "./store.js";
import Employee from "./employee.js";

//inicializing store
const store = new Store();

// cashier or main employee or manager
const cashierEmployee = new Employee(
  "Petr",
  "cashier",
  30,
  5000548,
  "rwsger@mail.ru"
);

cashierEmployee.setStore(store);

const htmlDivPets = document.getElementById("pets");
const htmlDivProducts = document.getElementById("products");
const htmlDivEmployees = document.getElementById("employees");
const htmlDivCash = document.getElementById("cash");

//filling data
store.pet.fillArray();
store.product.fillArray();
store.employee.fillArray(store);

//adding employee that can work with cash
store.employee.increment(new Employee("LLLLLL", "security", 50, "d", 50));

store.employee
  .getArrayList()[1]
  .serveCustomer(store.pet.getArrayList()[0], "Will"); // - buying pet means pet has owner
cashierEmployee.serveCustomer(store.pet.getArrayList()[2], "Cal");
cashierEmployee.serveCustomer(store.product.getArrayList()[2]);

//employees, that have not cashier role can't have access to cash
store.employee
  .getArrayList()[1]
  .serveCustomer(store.pet.getArrayList()[0], "Will");

htmlDivPets.innerHTML = store.displayPets();
htmlDivProducts.innerHTML = store.displayProducts();
htmlDivEmployees.innerHTML = store.displayEmployees();
htmlDivCash.innerHTML = store.displayCash();
