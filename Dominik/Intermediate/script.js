//Exercise 1
let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(cars.sort()); //sorts the array alphabeticly

//Exercise 2
let fruits = ["apple", "banana", "kiwi", "mango", "pear"];
console.log(fruits);

fruits.push("orange");
console.log(fruits); //apple banana kiwi mango pear orange

fruits.shift();
console.log(fruits); //banana kiwi mango pear orange

fruits.pop();
fruits.unshift("apple");
console.log(fruits); //apple banana kiwi mango pear

fruits.splice(0,1,"strawberry");
console.log(fruits); //strawberry banana kiwi mango pear

//-----------------------------------------------------------------

let animals = ["monekey", "horse", "dog", "elephant", "giraffe"];
console.log(animals);

animals.shift();
console.log(animals); //horse dog elephant giraffe

animals.unshift("cat");
console.log(animals); // cat horse dog elephant giraffe

animals.pop();
console.log(animals); // cat horse dog elephant

animals.push("tiger");
console.log(animals); // cat horse dog elephant tiger

// Exercise 3

let fruitsString = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
console.log(fruitsString);

let newFruitsString = new Array();
newFruitsString = fruitsString.split("/");

console.log(newFruitsString);
document.write(newFruitsString.join("<br><br>")); //output with empty lines in between