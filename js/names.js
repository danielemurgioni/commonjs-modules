// creo una funzione con due paramentri che mi restituisce un oggetto
function names(firstName, lastName){
    return {firstName, lastName}
}

console.log(names)

//esporto la funzione
module.exports = names;