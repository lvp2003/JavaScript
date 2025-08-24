const numbers = [1, 2, 3, 4];

numbers.forEach(function (number) {
  console.log(number);
});

numbers.forEach((number, index, arr) => {
  arr[index] = number * 2;
});

console.log(numbers);

// forEach with objects

const students = [
  { name: "Emma", grade: "A" },
  { name: "Liam", grade: "B" },
  { name: "Olivia", grade: "A" },
];

students.forEach((student) => {
  console.log(`${student.name} score grade ${student.grade} `);
});
