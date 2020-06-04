let arr = [1, 3, 2];

function sort(arr, callback) {
  for (const n in arr) {
    for (const m in arr) {
      if (callback(arr[n], arr[m]) < 0) {
        temp = arr[n];
        arr[n] = arr[m];
        arr[m] = temp;
      }
    }
  }
  return arr;
}
sort(arr, function (a, b) {
  return a - b;
});
console.table(arr);

for (let a in arr) {
  console.log(a);
}
