const number = document.getElementById("textbox");
const tofohrenheit = document.getElementById("tofohrenheit");
const toCelsiud = document.getElementById("toCelsiud");
const result = document.getElementById("result");
let temp;
function convert() {
  if (tofohrenheit.checked) {
    temp = Number(number.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(1) + "-F";
  } else if (toCelsiud.checked) {
    temp = Number(number.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "-C";
  } else {
    result.textContent = "select a conversion";
  }
}
