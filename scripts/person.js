export default class Person {
  constructor(name = "", age = 0, email = "", mobile = 0) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.mobile = mobile;
  }

  sayHi() {
    return alert(`Hi! My name is ${this.name}`);
  }
}
