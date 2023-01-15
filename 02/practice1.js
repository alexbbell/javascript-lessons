//Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
let n = 10;


let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
    prevPrev = prev;
    prev = current;

    current += prevPrev;
    console.log(current)
}


let ar = [1, 43, 5,3,2,31,1]
console.log(Math.max(1, 43, 5,3,2,31,1));
console.log(Math.sqrt(25) === Math.pow(25, 0.5));

console.log( (Math.random() * 100) + 50); //random from 50 to 120