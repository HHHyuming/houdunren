"user strict";
const user = {
  data: { name: "yuming", age: 18 },
  set age(value) {
    console.log("set ----");
    this.data.age = value;
  },
  get age() {
    console.log("get -----");
    return this.data.age;
  },
};

user.age = 99;
console.log(user.age);
