const numbers = [0, 1,2,3,4,5,6,7,8,9];

console.log(numbers.includes(5));


const students = [
    { name: 'Mark', age: 16 },
    { name: 'Marta', age: 13 },
    { name: 'Ian', age: 2 },
    
    { name: 'Aleksei', age: 42 },
    { name: 'Dina', age: 43 }
];

console.log('find', students.find ( s=>s.age > 30) ); // the first one fits condition
console.log( 'every', students.every ( s=>s.age > 30) ); //True if all of them fit
console.log( 'some', students.some ( s=>s.age > 30) ); //True if at least one fits

const nokids = students.filter( s=>s.age > 30);
console.log(nokids);

//reduce
const cartItems = [
    { name: 'Product 1', price: 50, quantity: 3},
    { name: 'Product 2', price: 150, quantity: 2},
    { name: 'Product 3', price: 18, quantity: 6},
]


const total  = cartItems.reduce(  
    (total, item) => total + item.price * item.quantity ,
    0

)
console.log('total', total);