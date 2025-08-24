// call-back with anonymous function

function fetchData(callback) {
  setTimeout(function () {
    const data = {
      user: "bob",
      age: 25,
    };
    callback(data);
  }, 2000);
}

fetchData(function (data) {
  console.log(data);
});
