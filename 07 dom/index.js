let h1 = document.createElement('h1');
h1.textContent = 'HUY!';

document.body.append(h1);
let ol = document.createElement('ol');
document.body.append(ol);

let list = [
    document.createElement('li'),
    document.createElement('li'),
    document.createElement('li')
];

list[0].textContent = 'Knife';
list[1].textContent = 'Milk';
list[2].textContent = 'Bread';

ol.prepend(list[0]);
ol.prepend(list[1]);
ol.prepend(list[2]);

let eggs = document.createElement('li');
eggs.textContent = 'Eggs';
list[1].before(eggs);

let sausage = document.createElement('li');
sausage.textContent = 'Sausage';
eggs.after(sausage);


let breadBought = document.createElement('li');
breadBought.innerHTML = '<strike>Bread</strike>';
ol.children[0].replaceWith(breadBought);