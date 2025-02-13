// string Reverse

let a = 'my name is ashik.';


//2nd approch
let reverse = a.split('').reverse().join(""); // reverse() only work on array ***
console.log(reverse);


// 2nd approch
let reverse2 = '';
for(let i of a) {
    reverse2 =i + reverse2 
}
console.log(reverse2)