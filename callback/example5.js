// 5. Custom Callback for Calculation

function calculate(a, b, operatin) {
  return operatin(a, b);
}

function sum(a, b) {
  return a + b;
}

console.log(calculate(5, 6, sum));
console.log(
  calculate(10, 6, function (x, y) {
    return x - y;
  })
);
