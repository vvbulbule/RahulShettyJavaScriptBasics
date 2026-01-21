//Variables are very loosely tight in javaScipt
// Vaiables can hold anytype of data

var a=4

//var datatype is used before javaScipt Version ES6
//we can use let,const from javaScipt Version ES6 
//var and let works similarly

//to declare a variable in js we have to use let keyword
// we don'y have to mention the datatype of Variable like int,string
//to print the datatype of variable we use typeof method
let b=5
b=6
console.log(b)//6
console.log(typeof(b))//number

//Decimal is also a Number
let c=12.56;
console.log(c)//12.56
console.log(typeof(c))//number

//String
let name1="Rahul Shetty"
console.log(name1)
console.log(typeof(name1));


//Boolean
let required = true;
console.log(required);
console.log(typeof(required))

//Null 
let value=null
console.log(value)
console.log(typeof(value))

// Undefied i.e don't assiged any values
let Undefied1
console.log(Undefied1)//undefined

//const
const name2="Vikrant"
console.log(name2)//Vikrant

//difference between let and var and const in javascript

//Let
// Use let when varible value can be reassiged with same variable name but we cann't be redeclared with same variable name
// i.e, for let Reassignment is Allowed but Re-declaration is not allowed

//const
// Use const when varible value can not be reassiged with same variable name also we cann't be redeclared with same variable name
// i.e, for const Reassignment also Re-declaration is not allowed

//var
// Use var when varible value can  be reassiged with same variable name also we can be redeclared with same variable name
// i.e, for const Reassignment also Re-declaration is allowed

/*
Scope:
var is function-scoped (or globally scoped if declared outside a function), meaning it's accessible throughout the entire function or the global window object, regardless of block boundaries like if statements or for loops.
let and const are block-scoped, so they are only accessible within the nearest set of curly braces ({}) where they are defined. This makes code more predictable and reduces the risk of naming conflicts.
*/