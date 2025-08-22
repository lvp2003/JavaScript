// random - number generator
// for (let i = 0; i <= 100; i++) {
//   let n = Math.round(Math.random() * (100-50))+50;
//   console.log(n);
// }

const max = 6;
const min = 1;

document.getElementById("roll").onclick = function () {
  let random1 = Math.floor(Math.random() * (max - min + 1)) + min;
  let random2 = Math.floor(Math.random() * (max - min + 1)) + min;
  let random3 = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("d1").textContent = "🎲 " + random1;
  document.getElementById("d2").textContent = "🎲 " + random2;
  document.getElementById("d3").textContent = "🎲 " + random3;
};
