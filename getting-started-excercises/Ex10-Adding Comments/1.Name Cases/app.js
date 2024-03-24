"use strict";
// storing person name in variable
let person_name = 'Tony Stark';
// converting name in uppercase , lowercase ,tile case
console.log("Your name in  UpperCase is ", person_name.toUpperCase());
console.log("Your name in LowerCase is", person_name.toLowerCase());
// converting name in title case
console.log('Your Name In Title Case Is', person_name.replace(/\b\w/g, c => c.toUpperCase()));
