const fullname = "java script";

console.log(fullname.slice(0, 3));
console.log(fullname.slice(4, 8));

const firstname = fullname.slice(0, fullname.indexOf(" "));
const lasttname = fullname.slice(fullname.indexOf(" "));

console.log(firstname);
console.log(lasttname);

console.log(fullname.slice(-1));

// it is the procees of creating the substring

const email = "javascript@gmail.com";

const username = email.slice(0, email.indexOf("@"));
const extension = email.slice(email.indexOf("@") + 1);

console.log(username, extension);
