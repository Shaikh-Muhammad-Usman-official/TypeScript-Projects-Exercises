// name :Shaikh Muhammad Usman
// date : 14-february-2024
// purpose: This program is designed convert a string data in a variable to be converted into upper , lower ,and title cases

// storing person name in variable
let person_name :  String = 'Tony Stark';
// converting name in uppercase , and lowercase 
console.log("Your name in  UpperCase is ",person_name.toUpperCase());
console.log("Your name in LowerCase is",person_name.toLowerCase());
// converting name in title case
console.log('Your Name In Title Case Is',person_name.replace(/\b\w/g,c=>c.toUpperCase()));
