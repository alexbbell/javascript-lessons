let digit = 20;

let otherDigit = digit;

otherDigit += 5;

// console.log(digit);
// console.log(otherDigit);


let obj = { model: 'VW Polo'};
let otherObj = obj;
console.log(obj === otherObj);
otherObj.model = 'Volkswagen Polo';
console.log(obj, otherObj);
otherObj.model = 'fffff';
console.log(obj === otherObj);
console.log(obj, otherObj);


let obj2 = { ...obj, model: 'WWWW Polo'}
let obj3 = Object.assign( {} , obj, {model: 'rrrrr'});
console.log(obj, otherObj, obj2, obj3);