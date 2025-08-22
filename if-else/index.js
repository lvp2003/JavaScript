document.getElementById("button").onclick = function () {
  let age = Number(document.getElementById("age").value);
  let output = document.getElementById("output-p");

  if (isNaN(age)) {
    output.textContent = "Please enter a valid number!";
  } else if (age >= 100) {
    output.textContent = "You are too old to enter this site.";
  } else if (age == 0) {
    output.textContent = "You can't enter, you are just born.";
  } else if (age >= 18) {
    output.textContent = "You are old enough to enter this site.";
  } else if (age < 0) {
    output.textContent = "Your age can't be below 0.";
  } else {
    output.textContent = "You must be 18+ to enter this site.";
  }
};
