const numbers = [0, 1,2,3,4,5,6,7,8,9];




const first = numbers.shift();
console.log('shift', first);
console.log('numbers', numbers);

const last = numbers.pop();
console.log('pop', last);
console.log('numbers', numbers);

numbers.splice(3, 2);
console.log('numbers', numbers);

// while(numbers.length) {
//     console.log(`${numbers.pop()} removed`);
// }

const numberRev = numbers.reverse();
numberRev.push(12, 15, 13, 14);
numberRev.sort( (a, b) => {
    if(parseInt(a) - parseInt(b) > 0) return 1;
    if(parseInt(a) - parseInt(b) <= 0) return -1;
} );


console.log('numberRev',  numberRev);
console.log('numbers', numbers);
