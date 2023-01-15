let dayIndex = new Date().getDay();
console.log(dayIndex);
let days = [
    'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
]

console.log(`Today is ${days[dayIndex]}`);

const song = 'wherever you go whatever you do';

function parseStr (str)  {
    const [word1, word2, word3] = str.split(' ');
    return {
     word1, word2, word3
    }
}

let {word1, word2, word3} = parseStr(song);
console.log(song);
console.log(word2, word3, word1);
