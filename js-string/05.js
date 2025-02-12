// split();

let a = 'what are u doing?';
let b = 'ashik,rajib,kuddus';

console.log("split() in -> ' ' : "+ a.split(' '));
console.log("split() in -> ',' : "+ b.split(',')); // May not seem any diff


// Convert String to array -> split();
let c = b.split(","); // Split the string in to pice by  pice 
console.log("This is Array: " + Array.isArray(c) + " => "+ c);
