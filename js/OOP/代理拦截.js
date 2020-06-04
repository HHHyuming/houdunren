"use strict";
const hd = { name: "后盾热" };
// proxy 代理对象的一切
const proxy = new Proxy(hd, {
  get(obj, property) {
    console.log(obj);
    console.log(property);
    if (obj.hasOwnProperty(property)) {
      return obj[property];
    } else {
      throw new Error("异常");
    }
  },
  set(obj, property, value) {
    console.log(obj);
    console.log(property);
    console.log(value);
    obj[property] = value;
    return true;
  },
});

// console.log(proxy.xx);
proxy.name;
console.log("name" in proxy);
