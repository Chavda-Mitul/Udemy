const { text } = require("express");

const person = [
    {
        name: 'Mitul',
        age: 21,
        weight: 75,
    },
    {
        name: 'John',
        age: 20,
        weight: 85,
    },
    {
        name: 'Roknee',
        age: 22,
        weight: 95,
    },

];
const names = (people) => people.name;
const p = person.map(names);
console.log(p); 

const newPeople = person.map((items)=> {
    return {
        FName: items.name.toUpperCase(),
        NewWeight: items.weight - items.weight*0.20,
    };
})

console.log(newPeople);