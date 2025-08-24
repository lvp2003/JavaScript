// 6. Array Methods Using Callbacks

const number = [1, 2, 3, 4];

number.forEach((item) => {
  console.log(item * 2);
});

number.forEach(doubble);

function doubble(item) {
  console.log(item * 2);
}
