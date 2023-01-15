let s = String([
    true,
    false,
    1,
    1.1,
    { name: 'alexeuy'},
    null, 
    undefined
]);

console.log(s);
console.log(Boolean(42));
console.log(String(42));
console.log(Number('42'));
console.log(`${40  +2.2}`);
console.log(true == 1);

console.log( ( {toString() { return '4'} }) == 3);

console.log('rr', '1' < '10');