let num = [5, 2, 12, 8, 7, 9, 42, 1];
let isOdd = (num) => num % 2 !== 0; 
let isEven = (num) => num % 2 === 0; 
let odd = num.filter(isOdd);
let even = num.filter(isEven);
console.log(odd.length); 
console.log(even.length); 