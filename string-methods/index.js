let num = "javascript";

console.log(num.charAt(3)); // → Returns the character at index 3 ("a").

console.log(num.indexOf("s")); // → Returns the index of first occurrence of "s" (4).

console.log(num.length); // → Returns the length of the string (10).

console.log(num.startsWith("java")); // → Checks if string starts with "java" (true).

console.log(num.startsWith("python")); // → Checks if string starts with "python" (false).

console.log(num.endsWith("script")); // → Checks if string ends with "script" (true).

console.log(num.endsWith("cpp")); // → Checks if string ends with "cpp" (false).

console.log(num.toUpperCase()); // → Converts string to uppercase ("JAVASCRIPT").

console.log(num.toLowerCase()); // → Converts string to lowercase ("javascript").

console.log(num.includes("jav")); // → Checks if string contains "jav" (true).

console.log(num.includes("ruby")); // → Checks if string contains "ruby" (false).

let phone = "123-456-7890";
console.log(phone.replaceAll("-", "")); // → Replaces all "-" with "" ("1234567890").

let temp = "5";
console.log(temp.padStart(5, "*")); // → Pads string at start with "*" until length 5 ("****5").

console.log(temp.padEnd(5, "*")); // → Pads string at end with "*" until length 5 ("5****")).

console.log(num.repeat(5)); // → Repeats string 5 times ("javascriptjavascriptjavascriptjavascriptjavascript").
