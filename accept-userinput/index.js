// how to accept user input
// 1. Easy way = window promt
// 2. professional way = html textbox

// eays way
// let usename = window.prompt("enter you name,");
// console.log(usename);

// 2nd way
document.getElementById("mybutton").onclick = function () {
  let usename = document.getElementById("myinput").value;
  document.getElementById("myh1").textContent = usename;
};
