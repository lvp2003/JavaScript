// callback = a function that is passed as an argument to another argument
// used to handle asynchronous operations:
// 1. reading a file
// 2. Network requests
// 3. Interacting with databases

// "hey , when you're done, call this next...."

hello(wait, leave, goodBye);

function hello(...callback) {
  console.log("Hello!");

  callback.forEach((item) => {
    return item();
  });
}

function wait() {
  console.log("wait");
}

function leave() {
  console.log("leave");
}

function goodBye() {
  console.log("goodbye!");
}
