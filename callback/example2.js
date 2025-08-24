function sum(callback, x, y) {
  let res = x + y;
  callback(res);
}

function printResult(res) {
  console.log(res);
}

sum(printResult, 10, 20);
