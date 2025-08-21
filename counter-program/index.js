const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
const decrement = document.getElementById("decrement");
const coubtLabel = document.getElementById("coubtLabel");
let count = 0;
// let ans = 0;
// document.getElementById("increment").onclick = function () {
//   ans += 1;
//   document.getElementById("coubtLabel").textContent = ans;
// };
// document.getElementById("reset").onclick = function () {
//   ans = 0;
//   document.getElementById("coubtLabel").textContent = ans;
// };
// document.getElementById("decrement").onclick = function () {
//   ans -= 1;
//   document.getElementById("coubtLabel").textContent = ans;
// };

increment.onclick = function () {
  count++;
  coubtLabel.textContent = count;
};
reset.onclick = function () {
  count = 0;
  coubtLabel.textContent = count;
};
decrement.onclick = function () {
  count--;
  coubtLabel.textContent = count;
};
