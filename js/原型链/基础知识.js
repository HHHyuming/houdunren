/**
 * 每个对象都有一个__proto__ 指向一个原型对象prototype
 * prototype只有函数有
 */

//  Object.setPrototypeOf 设置原型对象
// 获取原型对象
Object.getPrototypeOf;
//
function A() {}
function B() {}
function C() {}

const c = new C();
B.prototype = c;
const b = new B();
A.prototype = b;
const a = new A();

console.dir(a instanceof A); //true
console.dir(a instanceof B); //true
console.dir(a instanceof C); //true
console.dir(b instanceof C); //true
console.dir(c instanceof B); //false

let xx = { name: 1 };

console.log(xx.__proto__);
for (const res in xx.__proto__) {
  console.log(res);
}

for (const key in xx.__proto__) {
  console.log(key);
}
