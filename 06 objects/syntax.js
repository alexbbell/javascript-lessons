
let myperson = {
    name: 'Aleksei',
    age: 41
}


function getfullname() {
    return `${this.name}  ${this.lastname} `
}


console.log(myperson.age);
console.log(myperson['age']);

let me  = {
    name: 'Aleksei',
    lastname: 'Beliaev',
    birthDate: {year: 1981, month: 3, day: 14},
    getAge() {
        
        let born = new Date( this.birthDate.year,
            this.birthDate.month,
            this.birthDate.day);
        strResult = Math.floor ((new Date().getTime() - born.getTime()) / 1000 / 3600 / 24 / 365.25);
        return strResult;
    },

    myName: getfullname
    
}

console.log(me.getAge());
console.log(me.myName());

delete(me.myName);
console.log(me.myName());

