// console.log("index for caption four");

// const array1 = [1, 2, 3, 4];

// console.log(array1.length);

// Array 构造函数

// console.log(array1.toString());

/**
 * isArray(var) 判断是否为一个数组
 * toString 转化成字符串
 * join
 * from 字符串转换成数组
 * push 与 unshift  追加元素
 * pop 与 shift 相反
 * slice 数组切片
 * splice(下标，个数，...内容)
 * 清空数组 length =0 or array = [] splice(length-1,0)
 * join
 * split
 * concat
 * indexOf
 * includes
 * find(callback)
 * reverse
 * sort(a,b) 返回负数 a在b， 返回正数b在前面
 *
 * 迭代器 keys 返回下标 values 返回值
 * entries 返回键值对
 *
 *  every((item, index, arr) =>{
 *  return false
 * })
 * some((item,index,arr) => {
 * return true
 * })
 *
 * array.filter((item) =>{
 *  return item['xxx]=xxx
 * })
 */

//  展开语法
// let a = [1, 2, 3];
// let b = ["a", "后盾人", ...a];
// console.log(b); //["a", "后盾人", 1, 2, 3]

// //数组使用 解构
// // let [name, url] = ["后盾人", "houdunren.com"];
// // console.log(name, "----", url);

// let [name, ...arr] = ["后盾人", "hdcms", "houdunren.com"];
// console.log(name, arr); //后盾人 (2) ["hdcms", "houdunren.com"]
// //  函数传参
// console.log("函数传参");

// function hd([a, b]) {
//   console.log(a, b);
// }
// hd(["后盾人", "hdcms"]);

// console.log("dir");
// console.log(Array(4).fill("后盾人")); //["后盾人", "后盾人", "后盾人", "后盾人"]

// a.find((item) => {
//   if (item == 1) {
//     console.log("result ---", item);
//   }
// });

// //排序
// console.log(
//   a.sort((v1, v2) => {
//     return v2 - v1;
//   })
// );

// // foreach
// let lessons = [
//   { title: "媒体查询响应式布局", category: "css" },
//   { title: "FLEX 弹性盒模型", category: "css" },
//   { title: "MYSQL多表查询随意操作", category: "mysql" },
// ];

// lessons.forEach((item, index, array) => {
//   console.log(item, index, array);
// });
// console.log(lessons);

// // 三种for  1.forEach 2.for in 3. for of

// ax = ["美国队长", "钢铁侠"];
// for (let a of ax.values()) {
//   console.log(a);
//   console.log("x");
// }

// console.log(ax.values());

function inter() {
  const hd = ["houdunren", "hdcms"];
  const iterator = hd.entries();

  let {
    done,
    value: [k, v],
  } = iterator.next();

  console.log("done", done);
  console.log("value", value);
}

inter();
