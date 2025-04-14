const names = require("./names.js");
const hobbies = require("./hobbies.js");

const myHobbies = ["videogiochi", "musica", "pixel art"];
const myName = "Daniele";
const mySurname = "Murgioni";

const FullName = names(myName, mySurname);
const funzHobbies = hobbies(myHobbies[0],myHobbies[1],myHobbies[2]);

console.log(`${FullName.firstName} ${FullName.lastName}`);
console.log(funzHobbies);