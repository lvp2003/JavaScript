// switch = can be ab efficient to many if statements
let textscore = 100;
let grade;
switch (true) {
  case textscore >= 90:
    grade = "A";
    break;
  case textscore >= 80:
    grade = "B";
    break;
  case textscore >= 70:
    grade = "C";
    break;
  case textscore >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
    break;
}

console.log(grade);
