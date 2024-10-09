let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
console.log("Ralph");

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
console.log("Bob");

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    return [...cats, name];
}
let newCats = appendCat("Broom");
console.log(newCats);

function prependCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    return [name, ...cats];
}
let beforeCats = prependCat("Arnold");
console.log(beforeCats);

function removeLastCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    return cats.slice(0, cats.length -1); 
}
let cattyCats = removeLastCat();
console.log(cattyCats);

function removeFirstCat(name) {
    let cats = ["Milo", "Otis", "Garfield"];
    return cats.slice(1); 
}
let firstFirstCat = removeFirstCat();
console.log(firstFirstCat);
