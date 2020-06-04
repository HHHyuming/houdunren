"use strict";
const user = {
  name: "yuming",
  age: 22,
};

let desc = Object.getOwnPropertyDescriptors(user);
console.log(desc);

/**
 * {
  name: {
    value: 'yuming', 默认值
    writable: true, 可修改
    enumerable: true, 可迭代
    configurable: true 可删除
  },
  age: { value: 22, writable: true, enumerable: true, configurable: true }
}
 */

//  单独设置一个属性

// Object.defineProperty(user, "name", {
//   value: "HHHHyuming.com",
//   writable: false,
// });
// 设置多个
// Object.defineProperties(user, {
//   name: {
//     writable: true,
//     configurable: false,
//   },
//   age: {
//     writable: false,
//   },
// });
// 抛异常
// delete user.name;
// user.age = 88;
// console.log(Object.getOwnPropertyDescriptors(user));
// 抛异常
// user.name = "new name";

// 禁止添加 object.preventExtensions
const user2 = {
  name: "张三",
};
Object.preventExtensions(user2);
// 抛异常
// user2.favorite = [1, 2, 3];
// 判断这个对象是否可添加 isExtensible

// Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为 configurable: false

let user3 = {
  name: "yuming",
};

Object.seal(user3);

// console.log(user3);

console.log(user.name);

Object.seal(user);
console.log(Object.getOwnPropertyDescriptors(user));
