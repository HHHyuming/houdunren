// const hd = new Map();
// const arr = [
//   ["houdunren", "后盾人"],
//   ["hdcms", "开源系统"],
// ];

// arr.forEach(([key, value]) => {
//   console.log(key, value);

//   hd.set(key, value);
// });

let hd = new Map([
  ["houdunren", "后盾人"],
  ["hdcms", "开源系统"],
]);
// hd.forEach((value, key) => {
//   console.log(`${key}=>${value}`);
// });
const o = { name: "x" };
const o2 = { name: "x" };
hd.set(o, "232");
hd.set(o2, "233");
const res = hd.get(o);
console.log(res);
