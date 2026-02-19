/*Classes in JavaScript are used to create objects in a clean and structured way (introduced in ES6).
🔥 What is a Class?

A class is a blueprint to create objects.

Instead of writing object manually every time, we create a class and then create multiple objects from it.
*/

class Person{
    //Class Variables
    age =25

    // getter method is considered as Property of class 
    // Property getters
    get location(){
        return "Canada"
    }

    //Constuctor is a method called Aytomatically when when object is created.
    // Constuctor is Used to initialize values
    // Here firstName and LastName is instance Variables
    // Value of the instance variables provided at the runtime while creating the object creation
    //Scope to access the values of these instance variable is inside of the constructor block only 
    // To get the access of instance variables outside of the constructoe we use this keyword
    constructor (firstName,lastName){

        //Now after adding this keywords it Refers to the current class object.
        // Now firstname and Lastname is accessible to whole class Person
        this.firstName = firstName
        this.lastName=lastName

    }

    //Methods
    fullname (){
        console.log( this.firstName+" "+ this.lastName)
    }
}

//To access the properties of a class like location, Age we have to craete object of the class 
// object creation of the class done outside of the class
// Vikrant & Bulbule Values whill be pass to the constructor
let personDetails= new Person("Vikrant","Bulbule")
console.log(personDetails.age)//25
console.log(personDetails.location)//Canada i.e. here we don't have to give () after location because we used the get method for this
console.log(personDetails.fullname())//Vikrant Bulbule

//Creating Multiple Objects for the same class 
// Here for each object new instance is created 
// for each instance vlave for Age i.e Class level variable will be same but for instance variable value will will diffrent as we provided while object creation
let personDetails2 = new Person("Amit", "Patil");
console.log(personDetails.fullname())//Vikrant Bulbule
console.log(personDetails2.fullname())//Amit Patil
