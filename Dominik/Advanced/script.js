//Exercise 1
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

let sum = a+b+c+d+e;
console.log(sum);

let f = '1';
let g = 15;
let h = 8;
let i = "1";

let pro = f*g*h*i;
console.log(pro);

let quo = sum/pro;
document.write(quo);

//Exercise 2 -------------------------------------------------------------
let people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people.unshift("Matt");
people.pop();
people.push("Dominik");
//console.log(people);
peopleNew = people.slice(2,4);
//console.log(peopleNew);
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Anna");
console.log(people);

//Exercise 3 -------------------------------------------------------------
let matrix = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(matrix);
//console.log(matrix[1][1], [4][2], [5][3], [2][3], [2][1]);
console.log(matrix[1][1]);
console.log(matrix[4][2]);
console.log(matrix[5][3]);
console.log(matrix[2][3]);
console.log(matrix[2][1]);
//11 25 17 27 0