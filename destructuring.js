const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01717653844',
    money: 124545121545
}
// if right side is an object left side of destructuring will be object as well 
// use property name as a variable that contains the property value
const {phone, age: boyos} = actor

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(boyos)


// array destructuring. 
const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo)