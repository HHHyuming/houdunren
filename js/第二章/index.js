console.log("index.js");

("use strict");
// 三元表达式
let n = 1 > 2 ? true : false;
console.log("n------>", n);

// switch case

let name = 1;
switch (1) {
  case 1:
    console.log("产品");
    break;
  case 2:
    console.log("视频");
    break;

  default:
    console.log("123");

    console.log("默认");
}

// label
outer: for (let i = 0; i < 10; i++) {
  for (let j = 0; j <= 10; j++) {
    if (j == 2) {
      break outer;
    }
    console.log("j---", i);
  }
}

// for in 遍历
let list1 = [1, 2, 3, 4, 5];
let dic = { a: "av", b: "bv" };
// for (let i in list1) {
//   console.log(i);
// }

// for (let key in dic) {
//   console.log(key, dic[key]);
// }

// for of 遍历
// for (let a of list1) {
//   console.log(a);
// }

// for (let key,v of dic) {
//   console.log(key,v);
// }
