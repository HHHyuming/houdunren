function factorial(num) {
  return num == 1 ? 1 : num * factorial(num - 1);
}
let proxy = new Proxy(factorial, {
  apply(func, obj, args) {
    console.log(func);
    console.log(obj);
    console.log(args);

    //   console.time("run");
    //   func.apply(obj, args);
    //   console.timeEnd("run");
  },
});
proxy.apply(this, [1, 2, 3]);
