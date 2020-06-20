// const promise = new Promise((resolve, reject) => {
//   reject("hdcms");
// })
//   .then((msg) => {
//     console.log("resolve");
//   })
//   .catch((msg) => {
//     console.log("reject");
//   })
//   .finally(() => {
//     console.log("resolve/reject状态都会执行");
//   })
//   .then((result) => {
//     console.log("123");
//   });

// const p1 = new Promise((resolve, reject) => {
//   resolve("11111111111111");
// });
// const p2 = new Promise((resolve, reject) => {
//   reject("333333333333");
// });
// Promise.all([p1, p2])
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

async function hd() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123456);
    }, 2000);
  });
}
async function test() {
  console.log("312");

  let res = await hd();
  console.log("123");
  console.log(res);
}

test();
