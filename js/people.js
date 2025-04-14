const names = require("./names.js");

const myName = "Daniele"
const mySurname = "Murgioni"

const FullName = names(myName, mySurname)

console.log(`${FullName.firstName} ${FullName.lastName}`);