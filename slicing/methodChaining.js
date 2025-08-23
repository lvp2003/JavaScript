// method chaining = calling one method after another in one continuous line of code

// let username = window.prompt("enter your name: ");
let username = "  jAvaScrIpT  ";

// no methond chaining

username = username.trim();

let letter = username.charAt(0);
letter = letter.toUpperCase();

let remaining = username.slice(1);

remaining = remaining.toLowerCase();

username = letter + remaining;
console.log(username);

// with method chaning

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);
