import Store from "./store.js";
import Employee from "./employee.js";

//inicializing store
const store = new Store();

// cashier or main employee or manager
const cashierEmployee = new Employee(
  "Petr",
  30,
  5000548,
  "rwsger@mail.ru",
  store
);

const htmlDivPets = document.getElementById("pets");
const htmlDivProducts = document.getElementById("products");
const htmlDivEmployees = document.getElementById("employees");
const htmlDivCash = document.getElementById("cash");

console.log(store);

//filling data
store.pet.fillArray();
store.product.fillArray();
store.employee.fillArray();

cashierEmployee.sayHi();

//adding employee that can work with cash
store.employee.increment(new Employee("LLLLLL", 50, "d", 50, store));

//other employees do not have access to store
cashierEmployee.serveCustomer(store.pet.getArrayList()[0], "Will"); // - buying pet means pet has owner
cashierEmployee.serveCustomer(store.pet.getArrayList()[2], "Cal");
cashierEmployee.serveCustomer(store.product.getArrayList()[2]);

htmlDivPets.innerHTML = store.displayPets();
htmlDivProducts.innerHTML = store.displayProducts();
htmlDivEmployees.innerHTML = store.displayEmployees();
htmlDivCash.innerHTML = store.displayCash();
