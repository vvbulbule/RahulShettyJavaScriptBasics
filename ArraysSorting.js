//✔ By default → sorts alphabetically
let names = ["Rahul", "Amit", "Vikrant", "John"];
names.sort();
console.log(names);//[ 'Amit', 'John', 'Rahul', 'Vikrant' ]
names.reverse()
console.log(names)//[ 'Vikrant', 'Rahul', 'John', 'Amit' ]

//Sorting Strings Case-Insensitive
/*
JavaScript normally sorts strings based on Unicode values (ASCII order).

Uppercase letters come before lowercase letters in Unicode.

So without localeCompare(), result may not be alphabetically correct.
Since "Apple" starts with uppercase A, it comes before lowercase words.
*/

let fruits = ["banana", "Apple", "mango"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);//[ 'Apple', 'banana', 'mango' ]
