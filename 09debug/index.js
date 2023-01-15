test();

function test() {
    console.log(x);
    var x = 123;
    console.log(x);
};


let name = 'Vasya';

(function closureGreetings() {
    console.log(name);
})();

const arrowFn = (name, surname)  => {
    console.log(`${name} ${surname}`);
}
arrowFn('alex', 'bell');

const me = {
    name: 'alexey',
    lastname: 'beliaev',

    getFullName() {
        return `${this.name} ${this.lastname}`;
    },

    gfnArrow: () => {
        `${this.name} ${this.lastname}`
    }

}

console.log(me.getFullName());
console.log(me.gfnArrow());