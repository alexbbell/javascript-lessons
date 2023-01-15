let fibo = [1, 1];
for (let i=1; i< 10; ++i) {
    fibo.push(fibo[i] + fibo[i-1]);
}

console.log(fibo);


for (let i=1; i< Infinity; ++i) {
    fibo.push(fibo[i] + fibo[i-1]);
    console.log(i);
}


let rating = ['a1', 'ar', 'rff', 'fff'];

for (let i in rating) {
    //console.log(parseInt(i) + 3);
    console.log(`${parseInt(i) + 1} rating[i]`);
}


console.log(`====`);

for (let i in rating) {
    //console.log(parseInt(i) + 3);
    console.log(`${parseInt(i) + 1} rating[i]`);
}