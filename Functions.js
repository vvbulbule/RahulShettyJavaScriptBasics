
//In JavaScript, functions are reusable blocks of code used to perform a task

//1️⃣ Function Declaration (Normal Function)
// here add is function name having two parameters
function add(a,b){
    return a+b
}

console.log("Using Normal Function: " + add(2,3))//5 

// 2️⃣ Function Expression
// anonymous function
// Here we pass the function without name to the variable
let addition = function (a,b){
    return a+b
}
console.log("Using anonymous Function: " + addition(9,3))//12

//🔹 3️⃣ Arrow Function (Modern & Most Used 🔥)
let additionArray = (a,b) =>  (a+b)
console.log("Using Arrow Function: " + additionArray(5,5) )//10

