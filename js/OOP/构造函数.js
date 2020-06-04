function User(name, age) {
  let data = { name, age };
  let info = function () {
    return data.age > 50 ? "中年人" : "年轻人";
  };
  this.message = function () {
    return `${data.name}是${info()}`;
  };
}
let lisi = new User("后盾人", 22);
console.log(lisi.message());
