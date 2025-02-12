let a = 'Ashik';
let b = '  AshIK';
let c = ' asHIk  ';
let d = ' Ashik';

// a == b ?
if(a === d.trim())
    console.log("a === d");

// a == c
if(a.trim().toLowerCase() === c.trim().toLowerCase())
    console.log("a == c");

// trim() trimStart() trimEnd();
console.log("c.trimStart() :", c.trimStart());
console.log("c.trimEnd()   :", c.trimEnd());
console.log("d.trimStart() :", d.trimStart());
console.log("d.trimEnd()   :", d.trimEnd());

console.log("d.trim()      :", d.trim());


// Set Example for string a b c d to trim() and toLowerCase
console.log("a.trim().toLowerCase() :", a.trim().toLowerCase());
console.log("b.trim().toLowerCase() :", b.trim().toLowerCase());
console.log("c.trim().toLowerCase() :", c.trim().toLowerCase());
console.log("d.trim().toLowerCase() :", d.trim().toLowerCase());

