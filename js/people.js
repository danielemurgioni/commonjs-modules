const names = require("./names.js");
const hobbies = require("./hobbies.js");

function person(){ 
    return {
        fullname: names("Daniele", "Murgioni"),
        hobbies: hobbies("videogiochi", "musica", "pixel art")
    }
}

console.log(person());

console.log(person().fullname);
console.log(person().hobbies);