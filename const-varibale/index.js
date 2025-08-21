const PI = 3.14159;
let radius;
let circumference;
let area;
document.getElementById("myBtn").onclick = function () {
  radius = document.getElementById("myInput").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  area = 2 * PI * radius ** 2;
  document.getElementById("ouput1").textContent = circumference + "cm";
  document.getElementById("ouput2").textContent = area + "cm^2";
};
