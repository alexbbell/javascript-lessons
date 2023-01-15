let cards = ['2', 'King', 'Dama', 'Valet', 'Tuz'];


let hand = []

let found = false;
for (let card of cards) {

    if (card == 'Tuz' || card == 'King') continue;
    hand.push(card);

    if(card == 'Dama') {
        found = true
        break;
    }
    console.log(`The card ${card} is taken`);
}

console.log(`Cards in hand: ${hand}`);

let i = 0;
while (true) {
    if (i > 10) break;
    console.log(i);
    i += 2;
}